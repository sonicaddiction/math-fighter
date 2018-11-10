export function createHigherOrderAction<T>(actionType, payload: T) {
  return id => (payload: T) => ({
    id,
    type: actionType,
    payload,
  });
}
