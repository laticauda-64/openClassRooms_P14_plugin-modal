import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
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
      <StyledModal onClick={onValidate}>
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
      </StyledModal>
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

const StyledModal = styled.div`
  font-family: "Roboto", sans-serif;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  pointer-events: none;

  .enter-done {
    opacity: 1;
    pointer-events: visible;
  }

  .exit {
    opacity: 0;
  }

  .modal-content {
    width: 500px;
    padding: 10px;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
    transform: translateY(-200px);
    border: 2px solid #7e940e;
    border-radius: 12px;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  .modal.enter-done .modal-content {
    transform: translateY(0);
  }

  .modal.exit .modal-content {
    transform: translateY(-200px);
  }

  .modal-header,
  .modal-footer {
    padding: 10px;
  }

  .modal-title {
    margin: 0;
  }

  .modal-body {
    padding: 10px;
  }

  .modal-footer button {
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    background-color: #7e940e;
    cursor: pointer;
    margin-right: 10px;
  }

  .modal-footer button:hover {
    background-color: rgb(88, 103, 9);
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  .modal-footer button.alt {
    border: 1px solid rgba(126, 148, 14, 0.5);
    color: #7e940e;
    background-color: white;
  }

  .modal-footer button.alt:hover {
    background-color: rgba(126, 148, 14, 0.04);
    border: 1px solid #7e940e;
  }
`;
