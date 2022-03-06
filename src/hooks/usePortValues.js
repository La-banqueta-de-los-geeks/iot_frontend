import React from 'react';
import PortValuesRepository from '../repositories/PortValuesRepository';

function usePortValues() {
  const [portValues, setPortValues] = React.useState([]);
  const [portValue, setPortValue] = React.useState(null);
  const addPortValue = (portValue) => {
    const newPortValues = [...portValues];
    newPortValues.push(portValue);
    setPortValues(newPortValues);
  };
  const registerPortValue = (organization) => (portValue, callback) => {
    new PortValuesRepository()
      .setOrganization(organization)
      .assignToken()
      .add(portValue)
      .then((response) => {
        addPortValue(response.portValue);
        callback();
      })
      .catch((response) => {
        console.log(response);
        alert(response.errors);
      });
  };

  const allPortValues = (organization) => (callback) => {
    new PortValuesRepository()
      .setOrganization(organization)
      .assignToken()
      .all()
      .then((response) => {
        setPortValues(response.portValues);
        if (callback) callback();
      })
      .catch((response) => {
        console.log(response);
        alert(response.errors);
      });
  };
  return {
    portValues,
    setPortValues,
    portValue,
    setPortValue,
    registerPortValue,
    addPortValue,
    allPortValues,
  };
}

export default usePortValues;
