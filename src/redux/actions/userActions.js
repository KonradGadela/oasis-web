export const loginUser = (user) => {
  return {
    type: 'LOGIN',
    payload: user
  };
};

export const logoutUser = () => {
  return {
    type: 'LOGOUT'
  };
};