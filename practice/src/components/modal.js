// Modal.js
import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'; // 모달을 위한 CSS 스타일링

const Modal = ({ isShowing, hide, children }) => isShowing ? ReactDOM.createPortal(
  <>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
        
        </div>
        {children}
      </div>
    </div>
  </>, document.body
) : null;

export default Modal;
