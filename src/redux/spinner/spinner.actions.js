import spinnerTypes from "./spinner.types";

export const showSpinner = () => dispatch => {
	dispatch({
		type: spinnerTypes.SHOW_SPINNER
	});
};

export const hideSpinner = () => dispatch => {
	dispatch({
		type: spinnerTypes.HIDE_SPINNER
	});
};
