export const ERROR = 'app/error';
export const RESET = 'app/reset';

export const setError = (error) => ({
  type: ERROR,
  error,
});
