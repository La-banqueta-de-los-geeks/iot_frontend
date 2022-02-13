import React, { useContext, useState } from 'react';

import AppContext from '../../context/AppContext';
import { CustomModal } from '../Utils/Modal';
import { FormDevice } from './FormDevice';
import { setAuthUserToken } from '../../services/ApiInstance';
import useDevices from '../../hooks/useDevices';

const CreateDevice = () => {
  const { user } = useContext(AppContext);
  const { registerDevice } = useDevices();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const errorMessages = (data) => {
    alert(data.errors.join(','));
  };
  const register = (ev) => {
    ev.preventDefault();
    const { user_token } = user;
    const name = ev.target[0].value;
    const status = ev.target[1].value;
    const payload = { device: { name, status } };
    setAuthUserToken(user_token);
    registerDevice(payload, handleClose, errorMessages);
  };

  return (
    <CustomModal
      buttonActionText="+"
      buttonActionVariant="outline-primary"
      ModalTitle="Registrar nuevo Device"
      show={show}
      handleClose={handleClose}
      handleShow={handleShow}
    >
      <FormDevice register={register} handleClose={handleClose} />
    </CustomModal>
  );
};
export { CreateDevice };
