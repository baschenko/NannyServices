import { Link } from 'react-router-dom';
import imagesDefault from '../../images/default.png';
import Categories from '../Categories/Categories.jsx';
import Icon from '../Icon/Icon.jsx';
import css from './NannieCard.module.css';
import RatingAndLocation from '../RatingAndLocation/RatingAndLocation.jsx';
import Price from '../Price/Price.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorite,
  deleteFromFavorite,
} from '../../redux/nannies/slice.js';
import { selectFavoriteItems } from '../../redux/nannies/selectors.js';
import clsx from 'clsx';

const NannieCard = ({ nannie }) => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector(selectFavoriteItems);

  const isFavorite = favoriteItems.find(favorite => favorite.id === nannie.id);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(deleteFromFavorite(nannie.id));
      return;
    }
    dispatch(addToFavorite(nannie));
  };

  return (
    <div className={css.wrapperCard}>
      <div className={css.wrapperImg}>
        <img
          className={css.image}
          src={
            nannie.gallery[0].thumb !== null
              ? nannie.gallery[0].thumb
              : imagesDefault
          }
          alt={nannie.name}
          height="320"
        />
      </div>
      <div className={css.wrapperDescription}>
        <div className={css.cardHeader}>
          <h2 className={css.cardTitle}>{nannie.name}</h2>
          <div className={css.wrapperPrice}>
            <Price price={nannie.price} />
            <button
              aria-label="Heart button"
              className={clsx(css.cardHeart, isFavorite && css.favorite)}
              onClick={handleClick}
            >
              <Icon
                id="icon-heart"
                width={26}
                height={24}
                className={css.icon}
              />
            </button>
          </div>
        </div>

        <RatingAndLocation
          id={nannie.id}
          rating={nannie.rating}
          numberReviews={nannie.reviews.length}
          location={nannie.location}
          className=""
        />

        <p className={css.cardDescription}>{nannie.description}</p>
        <Categories nannie={nannie} />
        <Link className={css.link} to={`/catalog/${nannie.id}/features`}>
          Show more
        </Link>
      </div>

      {/* <Link
        className={s.link}
        state={{ from: location }}
        to={`/nannies/${movie.id}`}
      >
        <img
          src={
            movie.poster_path !== null
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : imagesDefault
          }
          alt={movie.title}
          height="280"
          className={s.img}
        />
        <h2 className={s.title}>{movie.title}</h2>
        <p className={s.text}>Rating: {Math.ceil(movie.vote_average)}</p>
      </Link> */}
    </div>
  );
};

export default NannieCard;
