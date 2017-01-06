import Immutable from 'immutable';

import {
  REQUEST_STATUS,
  SUCCESS_STATUS,
  FAILURE_STATUS,
  SHOW_STREAM,
  HIDE_STREAM,
} from '../actions/streamActions';

const DefaultState = Immutable.Record({
  isFetching: false,
  online: false,
  error: '',
  show: false,
});

const initialState = new DefaultState();

export default function streamReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_STATUS:
      return state.merge({ isFetching: true });

    case SUCCESS_STATUS:
      {
        return state.merge({
          isFetching: false,
          online: action.result.stream != null,
        });
      }

    case FAILURE_STATUS:
      return state.merge({
        isFetching: false,
        error: 'Server Error',
      });

    case SHOW_STREAM:
      return state.merge({
        show: action.show,
      });

    case HIDE_STREAM:
      return state.merge({
        show: action.show,
      });

    default:
      return state;
  }
}
