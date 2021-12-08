/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import clsx from 'clsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useCallback, useRef, useState } from 'react';
import { BASE_URL } from '../../constants';
import { selectRoomById } from '../../redux/rooms/selectors';
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

const Card = ({ id }) => {
  const { name, picture, facilities } = useSelector(selectRoomById(id));

  return (
    <Link className={classes.card} to={`/rooms/${id}`}>
      <img alt="" src={`${BASE_URL}${picture}`} className={classes.image} />
      <h5 className="h4 mt-4 fw-600">{name}</h5>
      <div className={classes.divider} />
      <div className="text-gray">
        <p className="caption fw-600 text-align-center">{facilities}</p>
        <CardFooter />
      </div>
    </Link>
  );
};

const RoomList = ({ data = [] }) => {
  const ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const next = useCallback(() => ref.current?.slickNext(), []);
  const prev = useCallback(() => ref.current?.slickPrev(), []);
  const onChange = useCallback((index) => setActiveIndex(index), []);

  return (
    <div>
      <Slider
        ref={ref}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
        infinite={false}
        dots={false}
        draggable={false}
        slidesToShow={3}
        slidesToScroll={3}
        afterChange={onChange}
      >
        {data.map((id) => <Card key={id} id={id} />)}
      </Slider>
      <button disabled={activeIndex === 0} onClick={prev} type="button" className={clsx(classes.button, classes.leftBtn)}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button disabled={activeIndex === data.length - 1} onClick={next} type="button" className={clsx(classes.button, classes.rightBtn)}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default RoomList;
