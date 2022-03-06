import React, { useState } from 'react';

import { CustomModal } from '../Utils/Modal';
import { setAuthUserToken } from '../../services/ApiInstance';
import { FormSequence } from './FormDeviceSequence';
const NewSequence = ({
  device,
  deviceGroup,
  addDeviceSequence,
  registerDeviceSequence,
  offsetSpanColButton,
  spanColButton,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const register = (sequence, disabledLoading) => {
    const { device_token } = device;
    setAuthUserToken(device_token);
    registerDeviceSequence(
      deviceGroup.id,
      { device_sequence: sequence },
      (sequence) => {
        addDeviceSequence(sequence);
        handleClose();
        disabledLoading();
      },
      (data) => {
        alert(data.errors.join(','));
      }
    );
  };

  return (
    <CustomModal
      offsetSpanColButton={offsetSpanColButton}
      spanColButton={spanColButton}
      buttonActionText="Agregar secuencia"
      buttonActionVariant="primary"
      ModalTitle="Registrar nuevo secuencia"
      show={show}
      handleClose={handleClose}
      handleShow={handleShow}
    >
      <FormSequence register={register} handleClose={handleClose} />
    </CustomModal>
  );
};
export { NewSequence };
