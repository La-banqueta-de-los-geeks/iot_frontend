import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function CustomModal({
  buttonActionText,
  buttonActionVariant,
  ModalTitle,
  buttonSecondaryText,
  buttonPrimaryText,
  handleClose,
  handleShow,
  show,
  children,
  onBodyCard,
}) {
  return (
    <>
      <Button variant={buttonActionVariant} onClick={handleShow}>
        {buttonActionText}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{ModalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
}

export { CustomModal };
