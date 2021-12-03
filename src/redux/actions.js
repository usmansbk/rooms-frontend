export const ERROR = 'app/error';
export const RESET = 'app/reset';

export const setError = (payload) => ({
  type: ERROR,
  payload,
});
