"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactTransitionGroup = require("react-transition-group");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _templateObject;

const _excluded = ["onValidate", "onCancel", "show", "title", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Modal = _ref => {
  let {
    onValidate,
    onCancel,
    show,
    title,
    children
  } = _ref,
      others = _objectWithoutProperties(_ref, _excluded);

  /**
   * Close modal by pressing "Esc" key
   */
  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      onValidate();
    }
  };
  /**
   * Add an event listenner when component is mounted
   * and delete it when is unmounted
   */


  (0, _react.useEffect)(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);
  /**
   * Avoid warning in React.strictMode
   */

  const nodeRef = _react.default.useRef(null);

  return /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, {
    nodeRef: nodeRef,
    in: show,
    unmountOnExit: true,
    timeout: {
      enter: 0,
      exit: 300
    }
  }, /*#__PURE__*/_react.default.createElement(StyledModal, {
    ref: nodeRef,
    onClick: onValidate
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("h4", {
    className: "modal-title"
  }, title)), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/_react.default.createElement("p", null, children)), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: onValidate,
    className: "button"
  }, "Ok"), onCancel !== undefined ? /*#__PURE__*/_react.default.createElement("button", {
    onClick: onCancel,
    className: "button alt"
  }, "Cancel") : null)))), document.getElementById("root"));
};

var _default = Modal;
/**
 * Component propTypes
 */

exports.default = _default;
Modal.propTypes = {
  onValidate: _propTypes.default.func.isRequired,
  onCancel: _propTypes.default.func,
  show: _propTypes.default.bool.isRequired,
  title: _propTypes.default.string,
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]).isRequired,
  others: _propTypes.default.any
};

const StyledModal = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-family: \"Roboto\", sans-serif;\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: all 0.3s ease-in-out;\n  pointer-events: none;\n  z-index: 2;\n\n  &.enter-done {\n    opacity: 1;\n    pointer-events: visible;\n  }\n\n  &.exit {\n    opacity: 0;\n  }\n\n  .modal-content {\n    width: 500px;\n    padding: 10px;\n    background-color: #fff;\n    transition: all 0.3s ease-in-out;\n    transform: translateY(-200px);\n    border: 2px solid #7e940e;\n    border-radius: 12px;\n    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);\n  }\n\n  &.enter-done .modal-content {\n    transform: translateY(0);\n  }\n\n  &.exit .modal-content {\n    transform: translateY(-200px);\n  }\n\n  .modal-header,\n  .modal-footer {\n    padding: 10px;\n  }\n\n  .modal-title {\n    margin: 0;\n  }\n\n  .modal-body {\n    padding: 10px;\n  }\n\n  .modal-footer button {\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n    border: none;\n    padding: 10px 20px;\n    border-radius: 5px;\n    color: white;\n    background-color: #7e940e;\n    cursor: pointer;\n    margin-right: 10px;\n  }\n\n  .modal-footer button:hover {\n    background-color: rgb(88, 103, 9);\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  }\n\n  .modal-footer button.alt {\n    border: 1px solid rgba(126, 148, 14, 0.5);\n    color: #7e940e;\n    background-color: white;\n  }\n\n  .modal-footer button.alt:hover {\n    background-color: rgba(126, 148, 14, 0.04);\n    border: 1px solid #7e940e;\n  }\n"])));