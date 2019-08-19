import hamburgerMenuTypes from "./hamburger-menu.types";

export const showHamburgerMenu = () => dispatch => {
  dispatch({
    type: hamburgerMenuTypes.SHOW_HAMBURGER_MENU
  });
};

export const hideHamburgerMenu = () => dispatch => {
  dispatch({
    type: hamburgerMenuTypes.HIDE_HAMBURGER_MENU
  });
};

export const toggleHamburgerMenu = () => dispatch => {
  dispatch({
    type: hamburgerMenuTypes.TOGGLE_HAMBURGER_MENU
  });
};
