import React from 'react';
import { Row, Button, Modal, Col } from 'react-bootstrap';
function CustomModal({
  buttonActionText,
  buttonActionVariant,
  ModalTitle,
  handleClose,
  handleShow,
  show,
  children,
  spanColButton,
  offsetSpanColButton,
  hiddenButtonAction,
}) {
  return (
    <Row>
      {!hiddenButtonAction && (
        <Col md={12}>
          <Button
            as={Col}
            md={{ offset: offsetSpanColButton || 0, span: spanColButton || 12 }}
            variant={buttonActionVariant}
            onClick={handleShow}
          >
            {buttonActionText}
          </Button>
        </Col>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{ModalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </Row>
  );
}

export { CustomModal };
