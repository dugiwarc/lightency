import signUpTypes from "./signup.types";

const initialState = {
  signUpIsHidden: true,
  hasSignedUp: false
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case signUpTypes.SHOW_SIGNUP:
      return {
        ...state,
        signUpIsHidden: false
      };
    case signUpTypes.HIDE_SIGNUP:
      return {
        ...state,
        signUpIsHidden: true
      };
    case signUpTypes.SIGN_UP_ACTION:
      return {
        ...state,
        hasSignedUp: true
      };
    case signUpTypes.RESET_SIGN_UP:
      return {
        ...state,
        hasSignedUp: false
      };
    default:
      return state;
  }
};

export default signUpReducer;
