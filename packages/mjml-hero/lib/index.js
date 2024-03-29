'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _mjmlCore = require('mjml-core');

var _fp = require('lodash/fp');

var _widthParser2 = require('mjml-core/lib/helpers/widthParser');

var _widthParser3 = _interopRequireDefault(_widthParser2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeBackgroundString = (0, _fp.flow)((0, _fp.filter)(_fp.identity), (0, _fp.join)(' '));

var MjHero = (_temp2 = _class = function (_BodyComponent) {
  (0, _inherits3.default)(MjHero, _BodyComponent);

  function MjHero() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MjHero);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MjHero.__proto__ || (0, _getPrototypeOf2.default)(MjHero)).call.apply(_ref, [this].concat(args))), _this), _this.getBackground = function () {
      return makeBackgroundString([_this.getAttribute('background-color')].concat((0, _toConsumableArray3.default)(_this.getAttribute('background-url') ? ['url(' + _this.getAttribute('background-url') + ')', 'no-repeat', _this.getAttribute('background-position') + ' / cover'] : [])));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MjHero, [{
    key: 'getChildContext',
    value: function getChildContext() {
      // Refactor -- removePaddingFor(width, ['padding', 'inner-padding'])
      var containerWidth = this.context.containerWidth;

      var paddingSize = this.getShorthandAttrValue('padding', 'left') + this.getShorthandAttrValue('padding', 'right');

      var currentContainerWidth = parseFloat(containerWidth) + 'px';

      var _widthParser = (0, _widthParser3.default)(currentContainerWidth, {
        parseFloatToInt: false
      }),
          unit = _widthParser.unit,
          parsedWidth = _widthParser.parsedWidth;

      if (unit === '%') {
        currentContainerWidth = parseFloat(containerWidth) * parsedWidth / 100 - paddingSize + 'px';
      } else {
        currentContainerWidth = parsedWidth - paddingSize + 'px';
      }

      return (0, _extends3.default)({}, this.context, {
        containerWidth: currentContainerWidth
      });
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      var containerWidth = this.context.containerWidth;

      var backgroundRatio = Math.round(parseInt(this.getAttribute('background-height'), 10) / parseInt(this.getAttribute('background-width'), 10) * 100);

      return {
        div: {
          margin: '0 auto',
          'max-width': containerWidth
        },
        table: {
          width: '100%'
        },
        tr: {
          'vertical-align': 'top'
        },
        'td-fluid': {
          width: '0.01%',
          'padding-bottom': backgroundRatio + '%',
          'mso-padding-bottom-alt': '0'
        },
        hero: {
          background: this.getBackground(),
          'background-position': this.getAttribute('background-position'),
          'background-repeat': 'no-repeat',
          padding: this.getAttribute('padding'),
          'padding-top': this.getAttribute('padding-top'),
          'padding-left': this.getAttribute('padding-left'),
          'padding-right': this.getAttribute('padding-right'),
          'padding-bottom': this.getAttribute('padding-bottom'),
          'vertical-align': this.getAttribute('vertical-align')
        },
        'outlook-table': {
          width: containerWidth
        },
        'outlook-td': {
          'line-height': 0,
          'font-size': 0,
          'mso-line-height-rule': 'exactly'
        },
        'outlook-inner-table': {
          width: containerWidth
        },
        'outlook-image': {
          border: '0',
          height: this.getAttribute('background-height'),
          'mso-position-horizontal': 'center',
          position: 'absolute',
          top: 0,
          width: this.getAttribute('background-width'),
          'z-index': '-3'
        },
        'outlook-inner-td': {
          'background-color': this.getAttribute('inner-background-color'),
          padding: this.getAttribute('inner-padding'),
          'padding-top': this.getAttribute('inner-padding-top'),
          'padding-left': this.getAttribute('inner-padding-left'),
          'padding-right': this.getAttribute('inner-padding-right'),
          'padding-bottom': this.getAttribute('inner-padding-bottom')
        },
        'inner-table': {
          width: '100%',
          margin: '0px'
        },
        'inner-div': {
          'background-color': this.getAttribute('inner-background-color'),
          float: this.getAttribute('align'),
          margin: '0px auto',
          width: this.getAttribute('width')
        }
      };
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      var containerWidth = this.context.containerWidth;
      var children = this.props.children;


      return '\n      <!--[if mso | IE]>\n        <table\n          ' + this.htmlAttributes({
        align: this.getAttribute('align'),
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        style: 'outlook-inner-table',
        width: containerWidth.replace('px', '')
      }) + '\n        >\n          <tr>\n            <td ' + this.htmlAttributes({ style: 'outlook-inner-td' }) + '>\n      <![endif]-->\n      <div\n        ' + this.htmlAttributes({
        align: this.getAttribute('align'),
        class: 'mj-hero-content',
        style: 'inner-div'
      }) + '\n      >\n        <table\n          ' + this.htmlAttributes({
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'inner-table'
      }) + '\n        >\n          <tr>\n            <td ' + this.htmlAttributes({ style: 'inner-td' }) + ' >\n              <table\n                ' + this.htmlAttributes({
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'inner-table'
      }) + '\n              >\n                ' + this.renderChildren(children, {
        renderer: function renderer(component) {
          return (// eslint-disable-line no-confusing-arrow
            component.constructor.isRawElement() ? component.render() : '\n                    <tr>\n                      <td\n                        ' + component.htmlAttributes({
              align: component.getAttribute('align'),
              background: component.getAttribute('container-background-color'),
              class: component.getAttribute('css-class'),
              style: {
                background: component.getAttribute('container-background-color'),
                'font-size': '0px',
                padding: component.getAttribute('padding'),
                'padding-top': component.getAttribute('padding-top'),
                'padding-right': component.getAttribute('padding-right'),
                'padding-bottom': component.getAttribute('padding-bottom'),
                'padding-left': component.getAttribute('padding-left'),
                'word-break': 'break-word'
              }
            }) + '\n                      >\n                        ' + component.render() + '\n                      </td>\n                    </tr>\n                  '
          );
        }
      }) + '\n              </table>\n            </td>\n          </tr>\n        </table>\n      </div>\n      <!--[if mso | IE]>\n            </td>\n          </tr>\n        </table>\n      <![endif]-->\n    ';
    }
  }, {
    key: 'renderMode',
    value: function renderMode() {
      var commonAttributes = {
        background: this.getAttribute('background-url'),
        style: 'hero'

        /* eslint-disable no-alert, no-case-declarations */
      };switch (this.getAttribute('mode')) {
        case 'fluid-height':
          var magicTd = this.htmlAttributes({ style: 'td-fluid' });

          return '\n          <td ' + magicTd + ' />\n          <td ' + this.htmlAttributes((0, _extends3.default)({}, commonAttributes)) + '>\n            ' + this.renderContent() + '\n          </td>\n          <td ' + magicTd + ' />\n        ';
        case 'fixed-height':
        default:
          var height = parseInt(this.getAttribute('height'), 10) - this.getShorthandAttrValue('padding', 'top') - this.getShorthandAttrValue('padding', 'bottom');

          return '\n          <td\n            ' + this.htmlAttributes((0, _extends3.default)({}, commonAttributes, {
            height: height
          })) + '\n          >\n            ' + this.renderContent() + '\n          </td>\n        ';
      }
      /* eslint-enable no-alert, no-case-declarations */
    }
  }, {
    key: 'render',
    value: function render() {
      var containerWidth = this.context.containerWidth;


      return '\n      <!--[if mso | IE]>\n        <table\n          ' + this.htmlAttributes({
        align: 'center',
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'outlook-table',
        width: parseInt(containerWidth, 10)
      }) + '\n        >\n          <tr>\n            <td ' + this.htmlAttributes({ style: 'outlook-td' }) + '>\n              <v:image\n                ' + this.htmlAttributes({
        style: 'outlook-image',
        src: this.getAttribute('background-url'),
        'xmlns:v': 'urn:schemas-microsoft-com:vml'
      }) + '\n              />\n      <![endif]-->\n      <div\n        ' + this.htmlAttributes({
        align: this.getAttribute('align'),
        class: this.getAttribute('css-class'),
        style: 'div'
      }) + '\n      >\n        <table\n          ' + this.htmlAttributes({
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'table'
      }) + '\n        >\n          <tr\n            ' + this.htmlAttributes({
        style: 'tr'
      }) + '\n          >\n            ' + this.renderMode() + '\n          </tr>\n      </table>\n    </div>\n    <!--[if mso | IE]>\n          </td>\n        </tr>\n      </table>\n    <![endif]-->\n    ';
    }
  }]);
  return MjHero;
}(_mjmlCore.BodyComponent), _class.allowedAttributes = {
  mode: 'string',
  height: 'unit(px,%)',
  'background-url': 'string',
  'background-width': 'unit(px,%)',
  'background-height': 'unit(px,%)',
  'background-position': 'string',
  'container-background-color': 'color',
  'inner-background-color': 'color',
  'inner-padding': 'unit(px,%){1,4}',
  'inner-padding-top': 'unit(px,%)',
  'inner-padding-left': 'unit(px,%)',
  'inner-padding-right': 'unit(px,%)',
  'inner-padding-bottom': 'unit(px,%)',
  padding: 'unit(px,%){1,4}',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  'background-color': 'color',
  'vertical-align': 'enum(top,bottom,middle)'
}, _class.defaultAttributes = {
  mode: 'fixed-height',
  height: '0px',
  'background-url': null,
  'background-width': '0px',
  'background-height': '0px',
  'background-position': 'center center',
  padding: '0px',
  'padding-bottom': null,
  'padding-left': null,
  'padding-right': null,
  'padding-top': null,
  'background-color': '#ffffff',
  'vertical-align': 'top'
}, _temp2);
exports.default = MjHero;
module.exports = exports['default'];