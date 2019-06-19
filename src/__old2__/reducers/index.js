import { TOGGLE_NAVIGATION, TOGGLE_SIDEBAR } from '../action-types';

const showNavigation = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_NAVIGATION:
      return !state;
    default:
      return state;
  }
};

const showSidebar = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return !state;
    default:
      return state;
  }
};

export default {
  showNavigation,
  showSidebar,
};
