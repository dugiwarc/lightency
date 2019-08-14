import scrollTypes from "./scroll.types";

const initialState = {
  yPosition: 0
};

const scrollReducer = (state = initialState, action) => {
  console.log("ACTION", action);
  switch (action.type) {
    case scrollTypes.UPDATE_Y_POSITION:
      return {
        ...state,
        yPosition: action.payload
      };
    default:
      return state;
  }
};

export default scrollReducer;
