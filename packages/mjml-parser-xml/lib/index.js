'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = MJMLParser;

var _htmlparser = require('htmlparser2');

var _htmlparser2 = _interopRequireDefault(_htmlparser);

var _isObject = require('lodash/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _findLastIndex = require('lodash/findLastIndex');

var _findLastIndex2 = _interopRequireDefault(_findLastIndex);

var _find = require('lodash/find');

var _find2 = _interopRequireDefault(_find);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _filter = require('lodash/fp/filter');

var _filter2 = _interopRequireDefault(_filter);

var _map = require('lodash/fp/map');

var _map2 = _interopRequireDefault(_map);

var _flow = require('lodash/fp/flow');

var _flow2 = _interopRequireDefault(_flow);

var _cleanNode = require('./helpers/cleanNode');

var _cleanNode2 = _interopRequireDefault(_cleanNode);

var _convertBooleansOnAttrs = require('./helpers/convertBooleansOnAttrs');

var _convertBooleansOnAttrs2 = _interopRequireDefault(_convertBooleansOnAttrs);

var _setEmptyAttributes = require('./helpers/setEmptyAttributes');

var _setEmptyAttributes2 = _interopRequireDefault(_setEmptyAttributes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var indexesForNewLine = function indexesForNewLine(xml) {
  var regex = /\n/gi;
  var indexes = [0];

  while (regex.exec(xml)) {
    indexes.push(regex.lastIndex);
  }

  return indexes;
};

var isSelfClosing = function isSelfClosing(indexes, parser) {
  return indexes.startIndex === parser.startIndex && indexes.endIndex === parser.endIndex;
};

function MJMLParser(xml) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var includedIn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var _options$addEmptyAttr = options.addEmptyAttributes,
      addEmptyAttributes = _options$addEmptyAttr === undefined ? true : _options$addEmptyAttr,
      _options$components = options.components,
      components = _options$components === undefined ? {} : _options$components,
      _options$convertBoole = options.convertBooleans,
      convertBooleans = _options$convertBoole === undefined ? true : _options$convertBoole,
      _options$keepComments = options.keepComments,
      keepComments = _options$keepComments === undefined ? true : _options$keepComments,
      _options$filePath = options.filePath,
      filePath = _options$filePath === undefined ? '.' : _options$filePath,
      _options$ignoreInclud = options.ignoreIncludes,
      ignoreIncludes = _options$ignoreInclud === undefined ? false : _options$ignoreInclud;


  var endingTags = (0, _flow2.default)((0, _filter2.default)(function (component) {
    return component.endingTag;
  }), (0, _map2.default)(function (component) {
    return component.getTagName();
  }))((0, _extends3.default)({}, components));

  var cwd = filePath ? _path2.default.dirname(filePath) : process.cwd();

  var mjml = null;
  var cur = null;
  var inInclude = !!includedIn.length;
  var inEndingTag = 0;
  var currentEndingTagIndexes = { startIndex: 0, endIndex: 0 };

  var findTag = function findTag(tagName, tree) {
    return (0, _find2.default)(tree.children, { tagName: tagName });
  };
  var lineIndexes = indexesForNewLine(xml);

  var handleInclude = function handleInclude(file, line) {
    var partialPath = _path2.default.resolve(cwd, file);

    if ((0, _find2.default)(cur.includedIn, { file: partialPath })) throw new Error('Circular inclusion detected on file : ' + partialPath);

    var content = void 0;

    try {
      content = _fs2.default.readFileSync(partialPath, 'utf8');
    } catch (e) {
      var newNode = {
        line: line,
        file: file,
        absoluteFilePath: _path2.default.resolve(cwd, filePath),
        parent: cur,
        tagName: 'mj-raw',
        content: '<!-- mj-include fails to read file : ' + file + ' at ' + partialPath + ' -->',
        children: []
      };
      cur.children.push(newNode);
      cur = newNode;

      return;
    }

    content = content.indexOf('<mjml>') === -1 ? '<mjml><mj-body>' + content + '</mj-body></mjml>' : content;

    var partialMjml = MJMLParser(content, (0, _extends3.default)({}, options, {
      filePath: partialPath
    }), [].concat((0, _toConsumableArray3.default)(cur.includedIn), [{
      file: cur.absoluteFilePath,
      line: line
    }]));

    var bindToTree = function bindToTree(children) {
      var tree = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : cur;
      return children.map(function (c) {
        return (0, _extends3.default)({}, c, { parent: tree });
      });
    };

    if (partialMjml.tagName !== 'mjml') {
      return;
    }

    var body = findTag('mj-body', partialMjml);
    var head = findTag('mj-head', partialMjml);

    if (body) {
      var boundChildren = bindToTree(body.children);
      cur.children = [].concat((0, _toConsumableArray3.default)(cur.children), (0, _toConsumableArray3.default)(boundChildren));

      cur = boundChildren[boundChildren.length - 1];
    }

    if (head) {
      var curHead = findTag('mj-head', mjml);

      if (!curHead) {
        mjml.children.push({
          file: filePath,
          absoluteFilePath: _path2.default.resolve(cwd, filePath),
          parent: mjml,
          tagName: 'mj-head',
          children: []
        });

        curHead = findTag('mj-head', mjml);
      }

      var _boundChildren = bindToTree(head.children, curHead);
      curHead.children = [].concat((0, _toConsumableArray3.default)(curHead.children), (0, _toConsumableArray3.default)(_boundChildren));

      cur = _boundChildren[_boundChildren.length - 1];
    }
  };

  var parser = new _htmlparser2.default.Parser({
    onopentag: function onopentag(name, attrs) {
      var isAnEndingTag = endingTags.indexOf(name) !== -1;

      if (inEndingTag > 0) {
        if (isAnEndingTag) inEndingTag += 1;
        return;
      }

      if (isAnEndingTag) {
        inEndingTag += 1;

        if (inEndingTag === 1) {
          // we're entering endingTag
          currentEndingTagIndexes.startIndex = parser.startIndex;
          currentEndingTagIndexes.endIndex = parser.endIndex;
        }
      }

      var line = (0, _findLastIndex2.default)(lineIndexes, function (i) {
        return i <= parser.startIndex;
      }) + 1;

      if (name === 'mj-include' && !ignoreIncludes) {
        inInclude = true;
        handleInclude(decodeURIComponent(attrs.path), line);
        return;
      }

      if (convertBooleans) {
        // "true" and "false" will be converted to bools
        attrs = (0, _convertBooleansOnAttrs2.default)(attrs);
      }

      var newNode = {
        file: filePath,
        absoluteFilePath: _path2.default.resolve(cwd, filePath),
        line: line,
        includedIn: includedIn,
        parent: cur,
        tagName: name,
        attributes: attrs,
        children: []
      };

      if (cur) {
        cur.children.push(newNode);
      } else {
        mjml = newNode;
      }

      cur = newNode;
    },
    onclosetag: function onclosetag(name) {
      if (endingTags.indexOf(name) !== -1) {
        inEndingTag -= 1;

        if (!inEndingTag) {
          // we're getting out of endingTag
          // if self-closing tag we don't get the content
          if (!isSelfClosing(currentEndingTagIndexes, parser)) {
            var partialVal = xml.substring(currentEndingTagIndexes.endIndex + 1, parser.endIndex).trim();
            var val = partialVal.substring(0, partialVal.lastIndexOf('</' + name));

            if (val) cur.content = val.trim();
          }
        }
      }

      if (inEndingTag > 0) return;

      if (inInclude) {
        inInclude = false;
      }

      cur = cur && cur.parent || null;
    },
    ontext: function ontext(text) {
      if (inEndingTag > 0) return;

      if (text && text.trim() && cur) {
        cur.content = ('' + (cur && cur.content || '') + text.trim()).trim();
      }
    },
    oncomment: function oncomment(data) {
      if (inEndingTag > 0) return;

      if (cur && keepComments) {
        cur.children.push({
          line: (0, _findLastIndex2.default)(lineIndexes, function (i) {
            return i <= parser.startIndex;
          }) + 1,
          tagName: 'mj-raw',
          content: '<!-- ' + data.trim() + ' -->'
        });
      }
    }
  }, {
    recognizeCDATA: true,
    decodeEntities: false,
    recognizeSelfClosing: true,
    lowerCaseAttributeNames: false
  });

  parser.write(xml);
  parser.end();

  if (!(0, _isObject2.default)(mjml)) {
    throw new Error('Parsing failed. Check your mjml.');
  }

  (0, _cleanNode2.default)(mjml);

  // Assign "attributes" property if not set
  if (addEmptyAttributes) {
    (0, _setEmptyAttributes2.default)(mjml);
  }

  return mjml;
}
module.exports = exports['default'];