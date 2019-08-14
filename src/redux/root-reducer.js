import { combineReducers } from "redux";

import backgroundReducer from "./background/background.reducer";
import signUpReducer from "./signupboard/signup.reducer";
import scrollReducer from "./scroll/scroll.reducer";

export default combineReducers({
  backgroundState: backgroundReducer,
  signUpState: signUpReducer,
  scrollState: scrollReducer
});
