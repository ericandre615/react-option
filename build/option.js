"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Option = exports.None = exports.Some = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var OPTION_TYPES = {
  SOME: '[Option: Some]',
  NONE: '[Option: None]'
};

var Some = function Some(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children);
};

exports.Some = Some;
Some.defaultProps = {
  _optionType: OPTION_TYPES.SOME
};

var None = function None(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children);
};

exports.None = None;
None.defaultProps = {
  _optionType: OPTION_TYPES.NONE
};

var findChildrenBy = function findChildrenBy(childType) {
  return function (children) {
    return _react["default"].Children.toArray(children).find(function (child) {
      return child.props._optionType === childType;
    });
  };
};

var isSome = findChildrenBy(OPTION_TYPES.SOME);
var isNone = findChildrenBy(OPTION_TYPES.NONE);

var Option = function Option(_ref3) {
  var children = _ref3.children,
      value = _ref3.value;

  if (value === true) {
    var SomeComponent = isSome(children);
    return SomeComponent || null;
  }

  var NoneComponent = isNone(children);
  return NoneComponent || null;
};

exports.Option = Option;
var _default = {
  Some: Some,
  None: None,
  Option: Option
};
exports["default"] = _default;
