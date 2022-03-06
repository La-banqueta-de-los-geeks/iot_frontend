import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { setChangeValue } from '../../config/utils';

const FormPortValue = ({ register, handleClose }) => {
  const [portValue, setPortValue] = React.useState({});
  const [isLoading, setLoading] = React.useState(false);

  const handleClick = (ev) => {
    ev.preventDefault();
    setLoading(true);
    register(portValue, () => {
      setLoading(false);
    });
  };

  return (
    <Form onSubmit={(ev) => handleClick(ev)}>
      <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="name..."
          name="name"
          onChange={(e) => setChangeValue(e, portValue, setPortValue)}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="value" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Value..."
          name="value"
          onChange={(e) => setChangeValue(e, portValue, setPortValue)}
        />
      </FloatingLabel>
      <Row>
        <Col md={{ span: 3, offset: 6 }}>
          <Button
            as={Col}
            md={{ span: 12 }}
            variant="secondary"
            disabled={isLoading}
            onClick={!isLoading ? handleClose : null}
          >
            {'Cancelar'}
          </Button>
        </Col>
        <Col md={{ span: 3 }}>
          <Button
            disabled={isLoading}
            onClick={!isLoading ? (ev) => handleClick(ev) : null}
            as={Col}
            md={{ span: 12 }}
            type="submit"
            variant="primary"
          >
            {isLoading ? 'Loading…' : 'Crear'}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
export { FormPortValue };
