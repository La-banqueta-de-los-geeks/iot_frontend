import api from '../ApiInstance';

const portsEnpoints = {
  getPorts: () => api.get('v1/devices/device_ports'),
};
export default portsEnpoints;
