import { OPEN_SIDE_MENU, CLOSE_SIDE_MENU } from '../app/App_constants';

export function openSideMenu() {
  return {
    type: OPEN_SIDE_MENU,
    open: true,
  };
};

export function closeSideMenu() {
  return {
    type: CLOSE_SIDE_MENU,
    open: false,
  };
};
