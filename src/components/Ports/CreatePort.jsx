import React, { useContext, useState } from 'react';

import AppContext from '../../context/AppContext';
import { CustomModal } from '../Utils/Modal';
import { FormPorts } from './Form';
import { setAuthUserToken } from '../../services/ApiInstance';
import usePorts from '../../hooks/usePorts';
const CreatePort = () => {
  const { device } = useContext(AppContext);
  const { registerDevicePort } = usePorts();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const errorMessages = (data) => {
    alert(data.errors.join(','));
  };
  const register = (ev) => {
    ev.preventDefault();
    const { device_token } = device;
    const port = ev.target[0].value;
    const status = ev.target[1].value;
    const payload = { device_port: { port, status } };
    setAuthUserToken(device_token);
    registerDevicePort(payload, handleClose, errorMessages);
  };

  return (
    <CustomModal
      buttonActionText="Agregar Puerto"
      buttonActionVariant="primary"
      ModalTitle="Registrar nuevo Device"
      show={show}
      handleClose={handleClose}
      handleShow={handleShow}
      onBodyCard={() => <p> Formulario </p>}
    >
      <FormPorts register={register} handleClose={handleClose} />
    </CustomModal>
  );
};
export { CreatePort };
