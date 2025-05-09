import Icon from '../Icon/Icon.jsx';
import css from './InfoNannie.module.css';
import { Link } from 'react-router-dom';

const InfoNannie = ({ id, rating, location, price }) => {
  return (
    <ul className={css.wrapperReviews}>
      <li className={css.item}>
        <Icon
          id="icon-location"
          width={16}
          height={16}
          className={css.location}
        />
        {location}
      </li>
      <li className={css.item}>
        <Icon id="icon-star" width={16} height={16} className={css.star} />
        <Link className={css.cardReviews} to={`/nannies/${id}/reviews`}>
          Rating: {rating}
        </Link>
      </li>

      <li className={css.item}>
        Price / 1 hour: <span className={css.cardPrice}>{price}$</span>
      </li>
    </ul>
  );
};

export default InfoNannie;
