import Immutable from 'immutable';

import {
  REQUEST_STATUS,
  SUCCESS_STATUS,
  FAILURE_STATUS,
} from '../actions/streamActions';

const DefaultState = Immutable.Record({
  isFetching: false,
  online: false,
  error: '',
});

const initialState = new DefaultState();

export default function streamReducer(state = initialState, action) {
  switch (action.type) {

    case REQUEST_STATUS:
      return state.merge({ isFetching: true });

    case SUCCESS_STATUS:
      return state.merge({
        isFetching: false,
        online: Immutable.fromJS(action.result),
      });

    case FAILURE_STATUS:
      return state.merge({
        isFetching: false,
        error: 'Server Error',
      });

    default:
      return state;
  }
}
