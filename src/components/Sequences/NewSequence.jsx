import Card from 'react-bootstrap/Card';
import React from 'react';
import { Button } from 'react-bootstrap';
const NewSequence = ({ portValue }) => {
  return (
    <Card className="mb-2">
      <Card.Title>{portValue.name}</Card.Title>
      <Card.Body>
        {portValue.value}
        <Button>Agregar</Button>
      </Card.Body>
    </Card>
  );
};
export { NewSequence };
