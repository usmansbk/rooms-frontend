/* eslint-disable react/prop-types */
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from '../../styles/Button.module.css';

const Button = ({
  onClick, disabled, icon, className, left,
}) => (
  <button onClick={onClick} type="button" disabled={disabled} className={clsx(classes.button, left ? classes.left : classes.right, className)}>
    <FontAwesomeIcon icon={icon} />
  </button>
);

export default Button;
