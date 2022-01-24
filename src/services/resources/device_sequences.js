import api from '../ApiInstance';

export const getDeviceSequences = (device_group_id) =>
  api
    .get(`/v1/devices/device_groups/${device_group_id}/device_sequences/`)
    .then((rest) => rest.data);
