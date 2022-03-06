import api from '../ApiInstance';

export const allPortValues = () => api.get(`/v1/organizations/port_values`);

export const createPortValue = (portValue) =>
  api.post('/v1/organizations/port_values', portValue);
