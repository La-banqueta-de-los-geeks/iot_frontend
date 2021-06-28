import api from '../ApiInstance';

const portsEnpoints = {
  getPorts: () => api.get('v1/devices/device_ports'),
  updatePort: (port_id, payload) =>
    api.put(`v1/devices/device_ports/${port_id}`, payload),
};
export default portsEnpoints;
