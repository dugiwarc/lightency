import scrollTypes from "./scroll.types";

const initialState = {
  yPosition: 0,
  whatWeDoIsVisible: false,
  solutionSectionIsVisible: false,
  africanMarketIsVisible: false
};

const scrollReducer = (state = initialState, action) => {
  switch (action.type) {
    case scrollTypes.MAKE_AM_VISIBLE:
      return {
        ...state,
        africanMarketIsVisible: true
      };
    case scrollTypes.MAKE_SS_VISIBLE:
      return {
        ...state,
        solutionSectionIsVisible: true
      };
    case scrollTypes.MAKE_WWD_VISIBLE:
      return {
        ...state,
        whatWeDoIsVisible: true
      };
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
