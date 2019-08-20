import { createSelector } from "reselect";

const selectSignUp = state => state.signUpState;

export const selectSignUpShow = createSelector(
  [selectSignUp],
  signUpState => signUpState.signUpIsHidden
);

export const selectSignUpIsHidden = createSelector(
  [selectSignUp],
  signUpState => signUpState.signUpIsHidden
);
