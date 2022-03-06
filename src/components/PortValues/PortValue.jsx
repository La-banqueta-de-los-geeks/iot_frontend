import Card from 'react-bootstrap/Card';
import React from 'react';
const PortValue = ({ portValue }) => {
  return (
    <Card className="mb-2">
      <Card.Title>{portValue.name}</Card.Title>
      <Card.Body>{portValue.value}</Card.Body>
    </Card>
  );
};
export { PortValue };
