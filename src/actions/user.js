export const CHANGE_VALUE = 'CHANGE_VALUE';
export const changeValue = (key, value) => ({
  type: CHANGE_VALUE,
  key: key,
  value: value,
});

export const LOGIN = 'LOGIN';
export const login = () => ({
  type: LOGIN,
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT,
});

export const TOGGLESIDEBAR = 'TOGGLESIDEBAR';
export const toggleSidebar = () => ({
  type: TOGGLESIDEBAR,
});

export const SAVE_USER = 'SAVE_USER';
export const saveUser = () => ({
  type: SAVE_USER,
});

export const INSCRIPTION = 'INSCRIPTION';
export const inscription = () => ({
  type: INSCRIPTION,
});

export const TOGGLE_MEDIUM = 'TOGGLE_MEDIUM';
export const toggleMedium = () => ({
  type: TOGGLE_MEDIUM,
});
