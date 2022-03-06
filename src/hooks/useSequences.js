import React from 'react';
import SequencesRepository from '../repositories/SequencesRepository';

function useSequences() {
  const [sequences, setSequences] = React.useState([]);
  const [sequence, setSequence] = React.useState(null);
  const addSequence = (sequence) => {
    const newSequences = [...sequences];
    newSequences.push(sequence);
    setSequences(newSequences);
  };
  const registerSequence = (
    device,
    deviceGroup,
    deviceSequence,
    sequence,
    callback
  ) => {
    new SequencesRepository()
      .setDevice(device)
      .setDeviceGroup(deviceGroup)
      .setDeviceSequence(deviceSequence)
      .assignToken()
      .add(sequence)
      .then((response) => {
        addSequence(response.sequence);
        if (callback) callback();
      })
      .catch((response) => {
        console.log(response);
        alert(response.errors);
      });
  };

  const allSequences = (device) => (callback) => {
    new SequencesRepository()
      .setDevice(device)
      .assignToken()
      .all()
      .then((response) => {
        setSequences(response.sequences);
        if (callback) callback();
      })
      .catch((response) => {
        console.log(response);
        alert(response.errors);
      });
  };
  return {
    sequences,
    setSequences,
    sequence,
    setSequence,
    registerSequence,
    addSequence,
    allSequences,
  };
}

export default useSequences;
