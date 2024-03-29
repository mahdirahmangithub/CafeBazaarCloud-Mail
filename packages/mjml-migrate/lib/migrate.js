'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = migrate;
exports.handleMjml3 = handleMjml3;

var _lodash = require('lodash');

var _mjmlParserXml = require('mjml-parser-xml');

var _mjmlParserXml2 = _interopRequireDefault(_mjmlParserXml);

var _mjmlCore = require('mjml-core');

var _jsBeautify = require('js-beautify');

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var beautifyOptions = {
  indent_size: 2,
  wrap_attributes_indent_size: 2,
  max_preserve_newline: 0,
  preserve_newlines: false
}; /* eslint-disable no-console */

function removeContainerTag(bodyTag) {
  if (bodyTag.children[0].tagName === 'mj-container') {
    bodyTag.attributes = bodyTag.children[0].attributes;
    bodyTag.children = bodyTag.children[0].children;
  }
  return bodyTag;
}

var listAttributes = function listAttributes(tag) {
  return tag.attributes;
};

function addPx(value) {
  if (!isNaN(value)) {
    return value + 'px';
  }
  return value;
}

function fixUnits(attribute, value) {
  var length = _config.attributesWithUnit.length;
  for (var i = 0; i < length; i += 1) {
    if (_config.attributesWithUnit[i] === attribute) {
      return addPx(value);
    }
  }
  return value;
}

function cleanAttributes(attributes) {
  (0, _lodash.keys)(attributes).forEach(function (key) {
    attributes[key] = fixUnits(key, attributes[key]);
  });
  return attributes;
}

var DEFAULT_SOCIAL_DISPLAY = 'facebook twitter google';

function migrateSocialSyntax(socialTag) {
  var listAllNetworks = function listAllNetworks(tag) {
    var attributes = (tag.attributes.display || DEFAULT_SOCIAL_DISPLAY).split(' ');
    delete tag.attributes.display;
    return attributes;
  };

  var attributes = listAttributes(socialTag);
  var networks = listAllNetworks(socialTag);

  socialTag.children = [];

  // migrate all attributes to their child attributes
  (0, _lodash.keys)(networks).forEach(function (network) {
    socialTag.children.push({
      tagName: 'mj-social-element',
      attributes: { name: networks[network] },
      content: attributes[networks[network] + '-content'] || ''
    });

    (0, _lodash.keys)(attributes).forEach(function (attribute) {
      if (attribute.match(networks[network]) && !attribute.match('content')) {
        socialTag.children[network].attributes[attribute.replace(networks[network] + '-', '')] = socialTag.attributes[attribute];
        delete socialTag.attributes[attribute];
      }
    });
  });

  // delete all content attributes from the root tag after they've been migrated
  (0, _lodash.keys)(attributes).forEach(function (attribute) {
    if (attribute.match('content')) {
      delete attributes[attribute];
    }
  });

  return socialTag;
}

function migrateNavbarSyntax(navbarTag) {
  navbarTag.tagName = 'mj-section';
  navbarTag.attributes['full-width'] = 'full-width';
  return navbarTag;
}

function migrateHeroSyntax(heroTag) {
  var child = (0, _lodash.find)(heroTag.children, { tagName: 'mj-hero-content' });

  return (0, _extends3.default)({}, heroTag, {
    children: child.children,
    attributes: (0, _extends3.default)({}, heroTag.attributes, child.attributes)
  });
}

function isSupportedTag(tag) {
  return _config.unavailableTags.indexOf(tag) === -1;
}

function loopThrough(tree) {
  (0, _lodash.keys)(tree).forEach(function (key) {
    if (key === 'children') {
      for (var i = 0; i < tree.children.length; i += 1) {
        if (isSupportedTag(tree.children[i].tagName)) {
          switch (tree.children[i].tagName) {
            case 'mj-body':
              tree.children[i] = removeContainerTag(tree.children[i]);
              break;
            case 'mj-social':
              tree.children[i] = migrateSocialSyntax(tree.children[i]);
              break;
            case 'mj-navbar':
              tree.children[i] = migrateNavbarSyntax(tree.children[i]);
              break;
            case 'mj-inline-links':
              tree.children[i].tagName = 'mj-navbar';
              break;
            case 'mj-link':
              tree.children[i].tagName = 'mj-navbar-link';
              break;
            case 'mj-hero':
              tree.children[i] = migrateHeroSyntax(tree.children[i]);
              break;
            // no default
          }

          tree.children[i].attributes = cleanAttributes(tree.children[i].attributes);
          loopThrough(tree.children[i]);
        } else {
          console.error('Ignoring unsupported tag : ' + tree.children[i].tagName + ' on line ' + tree.children[i].line);
          delete tree.children[i];
        }
      }
    }
  });
  return tree;
}

function checkV3Through(node) {
  if (node.tagName === 'mj-container') return true;
  if (!node.children || !node.children.length) return false;

  return node.children.some(checkV3Through);
}

var jsonToXML = function jsonToXML(_ref) {
  var tagName = _ref.tagName,
      attributes = _ref.attributes,
      children = _ref.children,
      content = _ref.content;

  var subNode = children && children.length > 0 ? children.map(jsonToXML).join('\n') : content || '';

  var stringAttrs = (0, _keys2.default)(attributes).map(function (attr) {
    return attr + '="' + attributes[attr] + '"';
  }).join(' ');

  return '<' + tagName + (stringAttrs === '' ? '>' : ' ' + stringAttrs + '>') + subNode + '</' + tagName + '>';
};

function migrate(input) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var beautify = options.beautify;

  if ((typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input)) === 'object') return loopThrough(input);

  var mjmlJson = (0, _mjmlParserXml2.default)(input, { components: _mjmlCore.components, ignoreIncludes: true });
  loopThrough(mjmlJson);

  return beautify ? (0, _jsBeautify.html)(jsonToXML(mjmlJson), beautifyOptions) : jsonToXML(mjmlJson);
}

function handleMjml3(mjml) {
  var isV3Synthax = checkV3Through(mjml);
  if (!isV3Synthax) return mjml;

  console.error('MJML v3 syntax detected, migrating to MJML v4 syntax. Use mjml -m to get the migrated MJML.');
  return migrate(mjml);
}

/* eslint-enable no-console */