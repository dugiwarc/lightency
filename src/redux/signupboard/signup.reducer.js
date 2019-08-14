import signUpTypes from "./signup.types";

const initialState = {
  signUpIsHidden: true
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case signUpTypes.TOGGLE_SIGNUP:
      return {
        ...state,
        signUpIsHidden: !state.signUpIsHidden
      };

    default:
      return state;
  }
};

export default signUpReducer;
