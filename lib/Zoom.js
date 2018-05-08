'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./css/Zoom.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Zoom = function (_Component) {
  _inherits(Zoom, _Component);

  function Zoom() {
    _classCallCheck(this, Zoom);

    return _possibleConstructorReturn(this, (Zoom.__proto__ || Object.getPrototypeOf(Zoom)).apply(this, arguments));
  }

  _createClass(Zoom, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
          setTimeout(function () {
            document.getElementById('preloader').classList.add('close');
          }, _this2.props.time);
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { backgroundColor: this.props.bgColor }, id: 'preloader' },
        _react2.default.createElement(
          'div',
          { className: 'spinner' },
          _react2.default.createElement('div', { style: { backgroundColor: this.props.color }, className: 'rect1' }),
          _react2.default.createElement('div', { style: { backgroundColor: this.props.color }, className: 'rect2' }),
          _react2.default.createElement('div', { style: { backgroundColor: this.props.color }, className: 'rect3' }),
          _react2.default.createElement('div', { style: { backgroundColor: this.props.color }, className: 'rect4' }),
          _react2.default.createElement('div', { style: { backgroundColor: this.props.color }, className: 'rect5' })
        )
      );
    }
  }]);

  return Zoom;
}(_react.Component);

Zoom.defaultProps = { time: 1300, bgColor: '#f7f7f7', color: '#2D2D2D' };

exports.default = Zoom;