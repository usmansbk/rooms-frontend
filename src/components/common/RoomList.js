/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import classes from '../../styles/RoomList.module.css';

const CardFooter = () => (
  <div className="flex-direction-row my-4 justify-content-center gap-4">
    <div className={classes.icon}>
      <FontAwesomeIcon icon={faFacebookF} />
    </div>
    <div className={classes.icon}>
      <FontAwesomeIcon icon={faTwitter} />
    </div>
    <div className={classes.icon}>
      <FontAwesomeIcon icon={faInstagram} />
    </div>
  </div>
);
