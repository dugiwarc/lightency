import scrollTypes from "./scroll.types";

export const updateYPosition = yPosition => dispatch => {
  dispatch({
    type: scrollTypes.UPDATE_Y_POSITION,
    payload: yPosition
  });
};

export const makeWWDVisible = () => dispatch => {
  dispatch({
    type: scrollTypes.MAKE_WWD_VISIBLE
  });
};

export const makeSSVisible = () => dispatch => {
  dispatch({
    type: scrollTypes.MAKE_SS_VISIBLE
  });
};

export const makeAMVisible = () => dispatch => {
  dispatch({
    type: scrollTypes.MAKE_AM_VISIBLE
  });
};
