import api from '../ApiInstance';

const devicesEnpoints = {
  getDevices: () => api.get('v1/devices/'),
  createDevice: (payload) => api.post('v1/devices/', payload),
};
export default devicesEnpoints;

export const getDevices = () =>
  api.get('v1/devices/').then((rest) => rest.data);
