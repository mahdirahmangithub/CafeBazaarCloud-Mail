'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _class, _temp;

var _mjmlCore = require('mjml-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjSocial = (_temp = _class = function (_BodyComponent) {
  (0, _inherits3.default)(MjSocial, _BodyComponent);

  function MjSocial() {
    (0, _classCallCheck3.default)(this, MjSocial);
    return (0, _possibleConstructorReturn3.default)(this, (MjSocial.__proto__ || (0, _getPrototypeOf2.default)(MjSocial)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjSocial, [{
    key: 'getStyles',
    value: function getStyles() {
      // eslint-disable-line class-methods-use-this
      return {
        tableVertical: {
          margin: '0px'
        }
      };
    }
  }, {
    key: 'getSocialElementAttributes',
    value: function getSocialElementAttributes() {
      var _this2 = this;

      var base = {};
      if (this.getAttribute('inner-padding')) {
        base.padding = this.getAttribute('inner-padding');
      }

      return ['border-radius', 'color', 'font-family', 'font-size', 'font-weight', 'font-style', 'icon-size', 'icon-height', 'icon-padding', 'text-padding', 'line-height', 'text-decoration'].reduce(function (res, attr) {
        res[attr] = _this2.getAttribute(attr);
        return res;
      }, base);
    }
  }, {
    key: 'renderHorizontal',
    value: function renderHorizontal() {
      var _this3 = this;

      var children = this.props.children;


      return '\n     <!--[if mso | IE]>\n      <table\n        ' + this.htmlAttributes({
        align: this.getAttribute('align'),
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation'
      }) + '\n      >\n        <tr>\n      <![endif]-->\n      ' + this.renderChildren(children, {
        attributes: this.getSocialElementAttributes(),
        renderer: function renderer(component) {
          return '\n            <!--[if mso | IE]>\n              <td>\n            <![endif]-->\n              <table\n                ' + component.htmlAttributes({
            align: _this3.getAttribute('align'),
            border: '0',
            cellpadding: '0',
            cellspacing: '0',
            role: 'presentation',
            style: {
              float: 'none',
              display: 'inline-table'
            }
          }) + '\n              >\n                ' + component.render() + '\n              </table>\n            <!--[if mso | IE]>\n              </td>\n            <![endif]-->\n          ';
        }
      }) + '\n      <!--[if mso | IE]>\n          </tr>\n        </table>\n      <![endif]-->\n    ';
    }
  }, {
    key: 'renderVertical',
    value: function renderVertical() {
      var children = this.props.children;


      return '\n      <table\n        ' + this.htmlAttributes({
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'tableVertical'
      }) + '\n      >\n        ' + this.renderChildren(children, {
        attributes: this.getSocialElementAttributes()
      }) + '\n      </table>\n    ';
    }
  }, {
    key: 'render',
    value: function render() {
      return '\n      ' + (this.getAttribute('mode') === 'horizontal' ? this.renderHorizontal() : this.renderVertical()) + '\n    ';
    }
  }]);
  return MjSocial;
}(_mjmlCore.BodyComponent), _class.allowedAttributes = {
  align: 'enum(left,right,center)',
  'border-radius': 'unit(px)',
  'container-background-color': 'color',
  color: 'color',
  'font-family': 'string',
  'font-size': 'unit(px)',
  'font-style': 'string',
  'font-weight': 'string',
  'icon-size': 'unit(px,%)',
  'icon-height': 'unit(px,%)',
  'icon-padding': 'unit(px,%){1,4}',
  'inner-padding': 'unit(px,%)',
  'line-height': 'unit(px,%)',
  mode: 'enum(horizontal,vertical)',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  padding: 'unit(px,%){1,4}',
  'table-layout': 'enum(auto,fixed)',
  'text-padding': 'unit(px,%){1,4}',
  'text-decoration': 'string',
  'vertical-align': 'enum(top,bottom,middle)'
}, _class.defaultAttributes = {
  align: 'center',
  'border-radius': '3px',
  color: '#333333',
  'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
  'font-size': '13px',
  'icon-size': '20px',
  'inner-padding': null,
  'line-height': '22px',
  mode: 'horizontal',
  padding: '10px 25px',
  'text-decoration': 'none'
}, _temp);
exports.default = MjSocial;
module.exports = exports['default'];