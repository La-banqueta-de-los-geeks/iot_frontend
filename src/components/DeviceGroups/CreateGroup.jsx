import React, { useState } from 'react';

import { CustomModal } from '../Utils/Modal';
import { setAuthUserToken } from '../../services/ApiInstance';
import { FormGroup } from './FormGroup';
const CreateGroup = ({
  device,
  setDeviceGroup,
  addDeviceGroups,
  registerDeviceGroup,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const register = (group, disabledLoading) => {
    const { device_token } = device;
    setAuthUserToken(device_token);
    registerDeviceGroup(
      { device_group: group },
      (device_group) => {
        setDeviceGroup(device_group);
        addDeviceGroups(device_group);
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
      buttonActionText="Agregar Grupo"
      buttonActionVariant="primary"
      ModalTitle="Registrar nuevo grupo"
      show={show}
      handleClose={handleClose}
      handleShow={handleShow}
    >
      <FormGroup register={register} handleClose={handleClose} />
    </CustomModal>
  );
};
export { CreateGroup };
