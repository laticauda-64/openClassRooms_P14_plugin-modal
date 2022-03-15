import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";
import propTypes from "prop-types";

const Modal = ({ onValidate, onCancel, show, title, children, ...others }) => {
  /**
   * Close modal by pressing "Esc" key
   */
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onValidate();
    }
  };

  /**
   * Add an event listenner when component is mounted
   * and delete it when is unmounted
   */
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
      <div className="modal" onClick={onValidate}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
          </div>
          <div className="modal-body">
            <p>{children}</p>
          </div>
          <div className="modal-footer">
            <button onClick={onValidate} className="button">
              Ok
            </button>
            {onCancel !== undefined ? (
              <button onClick={onCancel} className="button alt">
                Cancel
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;

/**
 * Component propTypes
 */

Modal.propTypes = {
  onValidate: propTypes.func.isRequired,
  onCancel: propTypes.func,
  show: propTypes.bool.isRequired,
  title: propTypes.string,
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]).isRequired,
  others: propTypes.any,
};
