'use strict';

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

var _FullImage = require('./FullImage');

var _FullImage2 = _interopRequireDefault(_FullImage);

var _LazyImage = require('./LazyImage');

var _LazyImage2 = _interopRequireDefault(_LazyImage);

var _getStyles = require('../shared/getStyles');

var _getStyles2 = _interopRequireDefault(_getStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var LazyImageWrapper = function (_React$Component) {
  (0, _inherits3['default'])(LazyImageWrapper, _React$Component);

  function LazyImageWrapper(props) {
    (0, _classCallCheck3['default'])(this, LazyImageWrapper);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (LazyImageWrapper.__proto__ || (0, _getPrototypeOf2['default'])(LazyImageWrapper)).call(this, props));

    _this.state = {
      loaded: false
    };
    _this.handleLoaded = _this.handleLoaded.bind(_this);
    return _this;
  }

  (0, _createClass3['default'])(LazyImageWrapper, [{
    key: 'handleLoaded',
    value: function () {
      function handleLoaded() {
        this.setState({
          loaded: true
        });
      }

      return handleLoaded;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props = this.props,
            src = _props.src,
            low = _props.low,
            width = _props.width,
            height = _props.height,
            blurRadius = _props.blurRadius;


        var styles = {
          width: width,
          height: height,
          padding: 0,
          margin: 0,
          top: 0
        };

        if (!this.props.low) {
          return _react2['default'].createElement('img', { src: src, style: styles });
        }

        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_FullImage2['default'], {
            src: src,
            style: (0, _getStyles2['default'])('FullImage', styles, this.state.loaded),
            onLoad: this.handleLoaded
          }),
          !this.state.loaded && _react2['default'].createElement(_LazyImage2['default'], {
            src: low,
            width: width,
            height: height,
            style: (0, _getStyles2['default'])('LazyImage', styles, this.state.loaded),
            blurRadius: this.props.blurRadius
          })
        );
      }

      return render;
    }()
  }]);
  return LazyImageWrapper;
}(_react2['default'].Component);

LazyImageWrapper.propTypes = {
  blurRadius: _react2['default'].PropTypes.number,
  width: _react2['default'].PropTypes.number,
  height: _react2['default'].PropTypes.number
};

LazyImageWrapper.defaultProps = {
  blurRadius: 10,
  width: 600,
  height: 190
};

module.exports = LazyImageWrapper;