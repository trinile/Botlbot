import { OPEN_SIDE_MENU, CLOSE_SIDE_MENU } from '../app/App_constants';

const sideMenu = (state = { open: false }, action) => {
  switch (action.type) {
    case OPEN_SIDE_MENU:
      return { open: true };
    case CLOSE_SIDE_MENU:
      return { open: false };
    default:
      return state;
  }
};

export default sideMenu;
