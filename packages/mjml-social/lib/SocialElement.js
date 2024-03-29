'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _class, _temp;

var _mjmlCore = require('mjml-core');

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IMG_BASE_URL = 'https://www.mailjet.com/images/theme/v1/icons/ico-social/';

var defaultSocialNetworks = {
  facebook: {
    'share-url': 'https://www.facebook.com/sharer/sharer.php?u=[[URL]]',
    'background-color': '#3b5998',
    src: IMG_BASE_URL + 'facebook.png'
  },
  twitter: {
    'share-url': 'https://twitter.com/home?status=[[URL]]',
    'background-color': '#55acee',
    src: IMG_BASE_URL + 'twitter.png'
  },
  google: {
    'share-url': 'https://plus.google.com/share?url=[[URL]]',
    'background-color': '#dc4e41',
    src: IMG_BASE_URL + 'google-plus.png'
  },
  pinterest: {
    'share-url': 'https://pinterest.com/pin/create/button/?url=[[URL]]&media=&description=',
    'background-color': '#bd081c',
    src: IMG_BASE_URL + 'pinterest.png'
  },
  linkedin: {
    'share-url': 'https://www.linkedin.com/shareArticle?mini=true&url=[[URL]]&title=&summary=&source=',
    'background-color': '#0077b5',
    src: IMG_BASE_URL + 'linkedin.png'
  },
  instagram: {
    'background-color': '#3f729b',
    src: IMG_BASE_URL + 'instagram.png'
  },
  web: {
    src: IMG_BASE_URL + 'web.png',
    'background-color': '#4BADE9'
  },
  snapchat: {
    src: IMG_BASE_URL + 'snapchat.png',
    'background-color': '#FFFA54'
  },
  youtube: {
    src: IMG_BASE_URL + 'youtube.png',
    'background-color': '#EB3323'
  },
  tumblr: {
    src: IMG_BASE_URL + 'tumblr.png',
    'share-url': 'https://www.tumblr.com/widgets/share/tool?canonicalUrl=[[URL]]',
    'background-color': '#344356'
  },
  github: {
    src: IMG_BASE_URL + 'github.png',
    'background-color': '#000000'
  },
  xing: {
    src: IMG_BASE_URL + 'xing.png',
    'share-url': 'https://www.xing.com/app/user?op=share&url=[[URL]]',
    'background-color': '#296366'
  },
  vimeo: {
    src: IMG_BASE_URL + 'vimeo.png',
    'background-color': '#53B4E7'
  },
  medium: {
    src: IMG_BASE_URL + 'medium.png',
    'background-color': '#000000'
  },
  soundcloud: {
    src: IMG_BASE_URL + 'soundcloud.png',
    'background-color': '#EF7F31'
  },
  dribbble: {
    src: IMG_BASE_URL + 'dribbble.png',
    'background-color': '#D95988'
  }
};

(0, _lodash.each)(defaultSocialNetworks, function (val, key) {
  defaultSocialNetworks[key + '-noshare'] = (0, _extends4.default)({}, val, {
    'share-url': '[[URL]]'
  });
});

var MjSocialElement = (_temp = _class = function (_BodyComponent) {
  (0, _inherits3.default)(MjSocialElement, _BodyComponent);

  function MjSocialElement() {
    (0, _classCallCheck3.default)(this, MjSocialElement);
    return (0, _possibleConstructorReturn3.default)(this, (MjSocialElement.__proto__ || (0, _getPrototypeOf2.default)(MjSocialElement)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjSocialElement, [{
    key: 'getStyles',
    value: function getStyles() {
      var _getSocialAttributes = this.getSocialAttributes(),
          iconSize = _getSocialAttributes['icon-size'],
          iconHeight = _getSocialAttributes['icon-height'],
          backgroundColor = _getSocialAttributes['background-color'];

      return {
        td: {
          padding: this.getAttribute('padding')
        },
        table: {
          background: backgroundColor,
          'border-radius': this.getAttribute('border-radius'),
          width: iconSize
        },
        icon: {
          padding: this.getAttribute('icon-padding'),
          'font-size': '0',
          height: iconHeight || iconSize,
          'vertical-align': 'middle',
          width: iconSize
        },
        img: {
          'border-radius': this.getAttribute('border-radius')
        },
        tdText: {
          'vertical-align': 'middle',
          padding: this.getAttribute('text-padding')

        },
        text: {
          color: this.getAttribute('color'),
          'font-size': this.getAttribute('font-size'),
          'font-weight': this.getAttribute('font-weight'),
          'font-style': this.getAttribute('font-style'),
          'font-family': this.getAttribute('font-family'),
          'line-height': this.getAttribute('line-height'),
          'text-decoration': this.getAttribute('text-decoration')
        }
      };
    }
  }, {
    key: 'getSocialAttributes',
    value: function getSocialAttributes() {
      var _this2 = this;

      var socialNetwork = defaultSocialNetworks[this.getAttribute('name')] || {};
      var href = this.getAttribute('href');

      if ((0, _lodash.get)(socialNetwork, 'share-url')) {
        href = socialNetwork['share-url'].replace('[[URL]]', href);
      }

      var attrs = ['icon-size', 'icon-height', 'src', 'background-color'].reduce(function (r, attr) {
        return (0, _extends4.default)({}, r, (0, _defineProperty3.default)({}, attr, _this2.getAttribute(attr) || socialNetwork[attr]));
      }, {});

      return (0, _extends4.default)({
        href: href
      }, attrs);
    }
  }, {
    key: 'render',
    value: function render() {
      var _getSocialAttributes2 = this.getSocialAttributes(),
          src = _getSocialAttributes2.src,
          href = _getSocialAttributes2.href,
          iconSize = _getSocialAttributes2['icon-size'],
          iconHeight = _getSocialAttributes2['icon-height'];

      return '\n      <tr\n        ' + this.htmlAttributes({
        class: this.getAttribute('css-class')
      }) + '\n      >\n        <td ' + this.htmlAttributes({ style: 'td' }) + '>\n          <table\n            ' + this.htmlAttributes({
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'table'
      }) + '\n          >\n            <tr>\n              <td ' + this.htmlAttributes({ style: 'icon' }) + '>\n                <a ' + this.htmlAttributes({
        href: href,
        rel: this.getAttribute('rel'),
        target: this.getAttribute('target')
      }) + '>\n                    <img\n                      ' + this.htmlAttributes({
        alt: this.getAttribute('alt'),
        title: this.getAttribute('title'),
        height: parseInt(iconHeight || iconSize, 10),
        src: src,
        style: 'img',
        width: parseInt(iconSize, 10)
      }) + '\n                    />\n                  </a>\n                </td>\n              </tr>\n          </table>\n        </td>\n        ' + (this.getContent() ? '\n          <td ' + this.htmlAttributes({ style: 'tdText' }) + '>\n            <a\n              ' + this.htmlAttributes({
        href: href,
        style: 'text',
        rel: this.getAttribute('rel'),
        target: this.getAttribute('target')
      }) + '>\n              ' + this.getContent() + '\n            </a>\n          </td>\n          ' : '') + '\n      </tr>\n    ';
    }
  }]);
  return MjSocialElement;
}(_mjmlCore.BodyComponent), _class.endingTag = true, _class.allowedAttributes = {
  align: 'enum(left,center,right)',
  'background-color': 'color',
  color: 'color',
  'border-radius': 'unit(px)',
  'font-family': 'string',
  'font-size': 'unit(px)',
  'font-style': 'string',
  'font-weight': 'string',
  href: 'string',
  'icon-size': 'unit(px,%)',
  'icon-height': 'unit(px,%)',
  'icon-padding': 'unit(px,%){1,4}',
  'line-height': 'unit(px,%)',
  name: 'string',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  padding: 'unit(px,%){1,4}',
  'text-padding': 'unit(px,%){1,4}',
  src: 'string',
  alt: 'string',
  title: 'string',
  target: 'string',
  'text-decoration': 'string'
}, _class.defaultAttributes = {
  align: 'left',
  color: '#000',
  'border-radius': '3px',
  'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
  'font-size': '13px',
  'line-height': '1',
  padding: '4px',
  'text-padding': '4px 4px 4px 0',
  target: '_blank',
  'text-decoration': 'none',
  href: '[[SHORT_PERMALINK]]'
}, _temp);
exports.default = MjSocialElement;
module.exports = exports['default'];