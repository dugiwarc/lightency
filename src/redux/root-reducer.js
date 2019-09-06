import { combineReducers } from "redux";

import backgroundReducer from "./background/background.reducer";
import signUpReducer from "./signupboard/signup.reducer";
import scrollReducer from "./scroll/scroll.reducer";
import hamburgerMenuReducer from "./hamburger-menu/hamburger-menu.reducer";
import spinnerReducer from "./spinner/spinner.reducer";

export default combineReducers({
	backgroundState: backgroundReducer,
	signUpState: signUpReducer,
	scrollState: scrollReducer,
	hamburgerMenuState: hamburgerMenuReducer,
	spinnerState: spinnerReducer
});
