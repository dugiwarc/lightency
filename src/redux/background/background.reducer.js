import backgroundTypes from "./background.types";

const initialState = {
  backgroundFillerIsHidden: true
};

const backgroundReducer = (state = initialState, action) => {
  switch (action.type) {
    case backgroundTypes.TOGGLE_BACKGROUND:
      return {
        ...state,
        backgroundFillerIsHidden: !state.backgroundFillerIsHidden
      };
    default:
      return state;
  }
};

export default backgroundReducer;
