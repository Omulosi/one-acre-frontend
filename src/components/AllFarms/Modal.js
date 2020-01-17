import React from 'react';

const Modal = ({
  title,
  closeModal,
  children
}) => {
  return (
  <div className="modal" style={{display: 'block'}}>
    <div className="modal-background"></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">{ title }</p>
        <button className="delete" aria-label="close" onClick={closeModal}></button>
      </header>
      <section className="modal-card-body">
      { children }
      </section>
      <footer className="modal-card-foot">
        <button className="button is-success">Fund</button>
        <button className="button" onClick={closeModal}>Cancel</button>
      </footer>
    </div>
  </div>
  )
}

export default Modal;
