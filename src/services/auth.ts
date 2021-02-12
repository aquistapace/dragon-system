export const isAuthenticated = () => localStorage.getItem('logedUser') !== null;
export const userLoged = () => localStorage.getItem('logedUser');
export const login = (token: string) => {
  localStorage.setItem('logedUser', token);
};
export const logout = () => {
  localStorage.removeItem('logedUser');
};
