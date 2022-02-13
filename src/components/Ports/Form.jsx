import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
const FormPorts = ({ register, handleClose }) => {
  return (
    <>
      <Form onSubmit={register}>
        <FloatingLabel controlId="floatingInput" label="port" className="mb-3">
          <Form.Control autoComplete="false" type="number" placeholder="Port" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="status"
          className="mb-3"
        >
          <Form.Select>
            <option value="ON">On</option>
            <option value="OFF">Off</option>
          </Form.Select>
        </FloatingLabel>
        <div className="d-flex justify-content-end">
          <Button className="mx-2" variant="secondary" onClick={handleClose}>
            {'Cancelar'}
          </Button>
          <Button className="mx-2" type="submit" variant="primary">
            {'Crear'}
          </Button>
        </div>
      </Form>
    </>
  );
};
export { FormPorts };
