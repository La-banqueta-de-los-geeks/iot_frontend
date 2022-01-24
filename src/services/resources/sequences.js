import api from '../ApiInstance';

export const getSequences = (device_group_id, device_sequence_id) =>
  api
    .get(
      `/v1/devices/device_groups/${device_group_id}/device_sequences/${device_sequence_id}/sequences`
    )
    .then((rest) => rest.data);
