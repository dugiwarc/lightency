import backgroundTypes from "./background.types";

const initialState = {
  hidden: true
};

const backgroundReducer = (state = initialState, action) => {
  switch (action.type) {
    case backgroundTypes.TOGGLE_BACKGROUND:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default backgroundReducer;
