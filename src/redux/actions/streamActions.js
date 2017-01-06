export const REQUEST_STATUS = 'REQUEST_STATUS';
export const SUCCESS_STATUS = 'SUCCESS_STATUS';
export const FAILURE_STATUS = 'FAILURE_STATUS';
export const SHOW_STREAM = 'SHOW_STREAM';
export const HIDE_STREAM = 'HIDE_STREAM';

export function fetchStatus(stream) {
  return dispatch =>
    dispatch({
      types: [
        REQUEST_STATUS,
        SUCCESS_STATUS,
        FAILURE_STATUS,
      ],
      stream,
      promise: client => client.get(`/streams/${stream}?client_id=fe3em1nihafjdjnnpa82qtmnlv873b`),
    });
}

export function showStream() {
  return dispatch =>
    dispatch({
      type: SHOW_STREAM,
      show: true,
    });
}

export function hideStream() {
  return dispatch =>
  dispatch({
    type: HIDE_STREAM,
    show: false,
  });
}
