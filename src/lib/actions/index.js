import { getDefaultActions } from './reduxActions';

export function getReduxActions(options) {
  const { getReduxStoreActions, store, settings, rjx, } = options;
  
  const Actions = Object.assign({},
    getDefaultActions({store,settings, rjx}),
    typeof getReduxStoreActions === 'function'
      ? getReduxStoreActions({store, settings,})
      : {});
  return Actions;
}