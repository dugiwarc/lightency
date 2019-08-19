import hamburgerMenuTypes from "./hamburger-menu.types";

const initialState = {
  hamburgerMenuIsHidden: true
};

const hamburgerMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case hamburgerMenuTypes.SHOW_HAMBURGER_MENU:
      return {
        ...state,
        hamburgerMenuIsHidden: false
      };
    case hamburgerMenuTypes.HIDE_HAMBURGER_MENU:
      return {
        ...state,
        hamburgerMenuIsHidden: true
      };
    case hamburgerMenuTypes.TOGGLE_HAMBURGER_MENU:
      return {
        ...state,
        hamburgerMenuIsHidden: !state.hamburgerMenuIsHidden
      };
    default:
      return state;
  }
};

export default hamburgerMenuReducer;
