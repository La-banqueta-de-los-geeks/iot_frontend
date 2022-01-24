import api from '../ApiInstance';

export const getDeviceGroups = () =>
  api.get('v1/devices/device_groups').then((rest) => rest.data);

export const createDeviceGroup = (payload) =>
  api.post('v1/devices/device_groups', payload);
