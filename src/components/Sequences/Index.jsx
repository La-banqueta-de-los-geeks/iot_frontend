import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import React from 'react';
const Sequences = ({ name }) => {
  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title className="mb-3 mt-3">{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <Button>Ejecutar</Button>
        </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Agregar secuencia</Card.Link>
        <Card.Link href="#">Ver secuencias</Card.Link>
      </Card.Body>
    </Card>
  );
};
export { Sequences };
