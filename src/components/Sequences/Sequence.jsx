import Card from 'react-bootstrap/Card';
import React from 'react';
const Sequence = ({ sequence }) => {
  return (
    <Card className="mb-2">
      <Card.Title>{sequence.name}</Card.Title>
      <Card.Body>{sequence.value}</Card.Body>
    </Card>
  );
};
export { Sequence };
