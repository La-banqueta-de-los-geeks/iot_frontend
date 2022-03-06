import React, { useState } from 'react';

import { CustomModal } from '../Utils/Modal';
import { FormPortValue } from './FormPortValue';
const NewPortValue = ({
  registerNewPortValue,
  offsetSpanColButton,
  spanColButton,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const register = (portValue, disabledLoading) => {
    registerNewPortValue(portValue, () => {
      disabledLoading();
      handleClose();
    });
  };

  return (
    <CustomModal
      offsetSpanColButton={offsetSpanColButton}
      spanColButton={spanColButton}
      buttonActionText="Agregar value"
      buttonActionVariant="primary"
      ModalTitle="Registrar nuevo value"
      show={show}
      handleClose={handleClose}
      handleShow={handleShow}
    >
      <FormPortValue register={register} handleClose={handleClose} />
    </CustomModal>
  );
};
export { NewPortValue };
