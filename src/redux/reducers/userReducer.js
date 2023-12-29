const initialState = {
  loggedIn: false,
  user: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loggedIn: true,
        user: action.payload
      };
    case 'LOGOUT':
      return {
        ...state,
        loggedIn: false,
        user: null
      };
    default:
      return state;
  }
};

export default userReducer;