'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var FullImage = function FullImage(props) {
  var src = props.src,
      style = props.style,
      onLoad = props.onLoad;

  return _react2['default'].createElement(
    'div',
    { style: style },
    _react2['default'].createElement('img', { src: src, style: style, onLoad: onLoad })
  );
};

FullImage.propTypes = {
  src: _react2['default'].PropTypes.string,
  style: _react2['default'].PropTypes.object,
  onload: _react2['default'].PropTypes.func
};

exports['default'] = FullImage;