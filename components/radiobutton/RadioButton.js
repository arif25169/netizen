'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RadioButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _DomHandler = require('../utils/DomHandler');

var _DomHandler2 = _interopRequireDefault(_DomHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioButton = exports.RadioButton = function (_Component) {
    _inherits(RadioButton, _Component);

    function RadioButton(props) {
        _classCallCheck(this, RadioButton);

        var _this = _possibleConstructorReturn(this, (RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).call(this, props));

        _this.onClick = _this.onClick.bind(_this);
        _this.onFocus = _this.onFocus.bind(_this);
        _this.onBlur = _this.onBlur.bind(_this);
        return _this;
    }

    _createClass(RadioButton, [{
        key: 'select',
        value: function select(e) {
            this.input.checked = true;
            this.onClick(e);
        }
    }, {
        key: 'onClick',
        value: function onClick(e) {
            if (!this.props.disabled && this.props.onChange) {
                this.props.onChange({
                    originalEvent: e,
                    value: this.props.value,
                    checked: !this.props.checked
                });
            }
        }
    }, {
        key: 'onFocus',
        value: function onFocus(e) {
            _DomHandler2.default.addClass(this.box, 'ui-state-focus');
        }
    }, {
        key: 'onBlur',
        value: function onBlur(e) {
            _DomHandler2.default.removeClass(this.box, 'ui-state-focus');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var containerClass = (0, _classnames2.default)('ui-radiobutton ui-widget', this.props.className);
            var boxClass = (0, _classnames2.default)('ui-radiobutton-box ui-widget ui-corner-all ui-state-default', { 'ui-state-active': this.props.checked, 'ui-state-disabled': this.props.disabled });
            var iconClass = (0, _classnames2.default)('ui-radiobutton-icon ui-c', { 'fa fa-circle': this.props.checked });

            return _react2.default.createElement(
                'div',
                { id: this.props.id, className: containerClass, style: this.props.style, onClick: this.onClick },
                _react2.default.createElement(
                    'div',
                    { className: 'ui-helper-hidden-accessible' },
                    _react2.default.createElement('input', { id: this.props.inputId, ref: function ref(el) {
                            return _this2.input = el;
                        }, type: 'radio', name: this.props.name, checked: this.props.checked, onFocus: this.onFocus, onBlur: this.onBlur, disabled: this.props.disabled })
                ),
                _react2.default.createElement(
                    'div',
                    { className: boxClass, ref: function ref(el) {
                            _this2.box = el;
                        } },
                    _react2.default.createElement('span', { className: iconClass })
                )
            );
        }
    }]);

    return RadioButton;
}(_react.Component);

RadioButton.defaultProps = {
    id: null,
    inputId: null,
    name: null,
    value: null,
    checked: false,
    style: null,
    className: null,
    disabled: false,
    onChange: null
};
RadioButton.propTypes = {
    id: _propTypes2.default.string,
    inputId: _propTypes2.default.string,
    value: _propTypes2.default.any,
    checked: _propTypes2.default.bool.isRequired,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    onChange: _propTypes2.default.func.isRequired
};