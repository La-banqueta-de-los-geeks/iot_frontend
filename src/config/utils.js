export function SearchUser() {
  return JSON.parse(localStorage.getItem('user'));
}
export function SearchToken() {
  return JSON.parse(localStorage.getItem('token'));
}
export function SearchOrganization() {
  return JSON.parse(localStorage.getItem('organization'));
}
export function deleteSession() {
  localStorage.removeItem('user');
  localStorage.removeItem('organization');
}
