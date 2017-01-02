/* global __DEV__*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import createPromiseMiddleware from './promiseMiddleware';
import rootReducer from '../reducers';

export default function configureStore(client) {
  const middlewareList = [
    thunk,
    createPromiseMiddleware(client),
  ];

  if (__DEV__) {
    middlewareList.push(
      loggerMiddleware({
        stateTransformer: state => (state.toJS ? state.toJS() : state),
      }),
    );
  }

  return createStore(
    rootReducer,
    applyMiddleware(...middlewareList),
  );
}
