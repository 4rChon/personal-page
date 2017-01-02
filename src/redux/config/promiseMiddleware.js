export default function createPromiseMiddleware(client) {
  return store => next => (action) => {
    const { promise, types, ...rest } = action;
    if (!promise) {
      return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;
    next({ ...rest, type: REQUEST });

    return promise(client).then(
      result => next({ ...rest, result, type: SUCCESS, receivedAt: Date.now() }),
      error => next({ ...rest, error, type: FAILURE }),
    ).catch((error) => {
      console.error('MIDDLEWARE ERROR:', error);
      next({ ...rest, error, type: FAILURE });
    });
  };
}
