'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var StackBlur = require('../shared/stackblur');

var LazyImage = function (_React$Component) {
  (0, _inherits3['default'])(LazyImage, _React$Component);

  function LazyImage() {
    (0, _classCallCheck3['default'])(this, LazyImage);
    return (0, _possibleConstructorReturn3['default'])(this, (LazyImage.__proto__ || (0, _getPrototypeOf2['default'])(LazyImage)).apply(this, arguments));
  }

  (0, _createClass3['default'])(LazyImage, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        var _this2 = this;

        this.canvas = this.refs.canvas;
        this.preImg = document.createElement('img');
        this.preImg.crossOrigin = 'Anonymous';
        this.preImg.onload = function () {
          StackBlur(_this2.preImg, _this2.refs.canvas, _this2.props.blurRadius, _this2.props.width, _this2.props.height);
        };
        this.preImg.src = this.props.src;
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentWillUpdate',
    value: function () {
      function componentWillUpdate(nextProps) {
        if (this.preImg.src !== nextProps.src) {
          this.preImg.src = nextProps.src;
        }
        StackBlur(this.preImg, this.canvas, nextProps.blurRadius, this.props.width, this.props.height);
      }

      return componentWillUpdate;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props = this.props,
            style = _props.style,
            width = _props.width,
            height = _props.height;


        return _react2['default'].createElement(
          'div',
          { style: style },
          _react2['default'].createElement('canvas', { width: width, height: height, style: style, ref: 'canvas' })
        );
      }

      return render;
    }()
  }]);
  return LazyImage;
}(_react2['default'].Component);

LazyImage.propTypes = {
  src: _react2['default'].PropTypes.string,
  style: _react2['default'].PropTypes.object,
  blurRadius: _react2['default'].PropTypes.number,
  width: _react2['default'].PropTypes.number,
  height: _react2['default'].PropTypes.number
};

LazyImage.defaultProps = {
  blurRadius: 10,
  width: 600,
  height: 190
};

exports['default'] = LazyImage;