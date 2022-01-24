import api from '../ApiInstance';

const portsEnpoints = {
  getPorts: () => api.get('v1/devices/device_ports'),
  updatePort: (portId, payload) =>
    api.put(`v1/devices/device_ports/${portId}`, payload),
  createPort: (payload) => api.post(`v1/devices/device_ports`, payload),
};
export default portsEnpoints;

export const getPorts = () =>
  api.get('v1/devices/device_ports').then((rest) => rest.data);
