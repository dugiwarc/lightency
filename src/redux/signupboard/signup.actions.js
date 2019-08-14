import signUpTypes from "./signup.types";

export const toggleSignUp = yCoordinate => ({
  type: signUpTypes.TOGGLE_SIGNUP,
  payload: yCoordinate
});
