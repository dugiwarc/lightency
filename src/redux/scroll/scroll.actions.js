import scrollTypes from "./scroll.types";

export const updateYPosition = yPosition => dispatch => {
  dispatch({
    type: scrollTypes.UPDATE_Y_POSITION,
    payload: yPosition
  });
};
