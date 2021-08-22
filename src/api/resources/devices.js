import api from '../ApiInstance';

const devicesEnpoints = {
  getDevices: () => api.get('v1/devices/'),
};
export default devicesEnpoints;
