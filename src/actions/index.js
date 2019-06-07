import { TOGGLE_SIDEBAR, TOGGLE_NAVIGATION } from '../action-types';
import SmartDeletePopin from '../components/smart-popins/SmartDeletePopin';

/* ------------------------------------------

 TOASTERS

------------------------------------------ */

// export const addToast = (message, type = 'error') => ({
//   item: {
//     id: Date.now(),
//     message,
//     type,
//   },
//
//   type: 'onAddToast',
// });
//
// export const removeToast = id => ({
//   id,
//   type: 'onRemoveToast',
// });

/* ------------------------------------------

 POPINS

------------------------------------------ */

export const closePopin = () => ({
  type: 'onClosePopin',
});

export const openPopin = opts => ({
  options: { ...opts },
  type: 'onOpenPopin',
});
//
export const openDeletePopin = opts =>
  openPopin({ ...opts, Type: SmartDeletePopin });

/* ------------------------------------------

 NAVIGATION

------------------------------------------ */

export const toggleNavigation = () => ({
  type: TOGGLE_NAVIGATION,
});

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR,
});
