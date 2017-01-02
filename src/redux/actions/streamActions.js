export const REQUEST_STATUS = 'REQUEST_STATUS';
export const SUCCESS_STATUS = 'SUCCESS_STATUS';
export const FAILURE_STATUS = 'FAILURE_STATUS';

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
