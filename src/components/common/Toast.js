import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideToast, selectToast } from '../../redux/toast';

const Toast = () => {
  const toast = useSelector(selectToast);
  const dispatch = useDispatch();
  const onDismiss = useCallback(() => dispatch(hideToast()), []);

  if (!toast) {
    return null;
  }

  return (
    <div className="p-2 flex-direction-row background-black text-white align-items-center">
      <p className="flex flex-grow-1">{toast}</p>
      <button className="button" type="button" onClick={onDismiss}>Dismiss</button>
    </div>
  );
};

export default Toast;
