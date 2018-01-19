import { getDefaultActions } from './reduxActions';

export function getReduxActions(options) {
  const { getReduxStoreActions, store, settings, } = options;
  
  const Actions = Object.assign({},
    getDefaultActions({store,settings}),
    typeof getReduxStoreActions === 'function'
      ? getReduxStoreActions({store, settings,})
      : {});
  return Actions;
}