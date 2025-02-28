import clsx from 'clsx';
import Icon from '../Icon/Icon.jsx';
import css from './RatingAndLocation.module.css';
import { Link } from 'react-router-dom';

const RatingAndLocation = ({
  id,
  rating,
  numberReviews,
  location,
  className = '',
}) => {
  return (
    <div className={clsx(css.wrapperReviews, className)}>
      <Icon id="icon-star" width={16} height={16} className={css.star} />
      <Link className={css.cardReviews} to={`/nannies/${id}/reviews`}>
        {rating}({numberReviews} Reviews)
      </Link>
      <Icon id="icon-map" width={16} height={16} className={css.map} />
      <p>{location}</p>
    </div>
  );
};

export default RatingAndLocation;
