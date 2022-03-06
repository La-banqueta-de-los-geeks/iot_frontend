import api from '../ApiInstance';

export const getSequences = (device_group_id) =>
  api
    .get(`/v1/devices/device_groups/${device_group_id}/device_sequences/`)
    .then((rest) => rest.data);

export const createSequence = (device_group_id, device_sequence_id, payload) =>
  api.post(
    `/v1/devices/device_groups/${device_group_id}/device_sequences/${device_sequence_id}/sequences`,
    payload
  );
