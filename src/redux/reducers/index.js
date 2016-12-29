import { combineReducers } from 'redux-immutable';

import stream from './streamReducer';

const rootReducer = combineReducers({
  stream,
});

export default rootReducer;
