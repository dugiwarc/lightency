import backgroundTypes from "./background.types";

export const toggleBackground = () => ({
	type: backgroundTypes.TOGGLE_BACKGROUND
});

export const hideBackground = () => ({
	type: backgroundTypes.HIDE_BACKGROUND
});
