const spinnerReducer = (state = { isActive: false }, action) => {
	switch (action.type) {
		case "SHOW_SPINNER":
			return { ...state, isActive: true };
		case "HIDE_SPINNER":
			return { ...state, isActive: false };
		default:
			return state;
	}
};

export default spinnerReducer;
