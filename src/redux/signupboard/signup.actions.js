import signUpTypes from "./signup.types";

export const showSignUp = yCoordinate => ({
  type: signUpTypes.SHOW_SIGNUP,
  payload: yCoordinate
});
export const hideSignUp = yCoordinate => ({
  type: signUpTypes.HIDE_SIGNUP,
  payload: yCoordinate
});

export const signUp = () => ({
  type: signUpTypes.SIGN_UP_ACTION
});

export const resetSignUp = () => ({
  type: signUpTypes.RESET_SIGN_UP
});
