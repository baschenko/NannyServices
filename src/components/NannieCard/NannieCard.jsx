import { Link } from 'react-router-dom';
import imagesDefault from '../../images/default.png';
import Icon from '../Icon/Icon.jsx';
import css from './NannieCard.module.css';
import InfoNannie from '../InfoNannie/InfoNannie.jsx';
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

  const isFavorite = favoriteItems.find(
    favorite => favorite.name === nannie.name
  );

  const handleClick = () => {
    if (isFavorite) {
      dispatch(deleteFromFavorite(nannie.name));
      return;
    }
    dispatch(addToFavorite(nannie));
  };

  return (
    <div className={css.wrapperCard}>
      <div className={css.wrapperImg}>
        <img
          className={css.image}
          src={nannie.avatar_url !== null ? nannie.avatar_url : imagesDefault}
          alt={nannie.name}
          height="320"
        />
      </div>
      <div className={css.wrapperDescription}>
        <div className={css.cardHeader}>
          <div className={css.wrapperTitle}>
            <p className={css.cardSubTitle}>Nanny</p>
            <h2 className={css.cardTitle}>{nannie.name}</h2>
          </div>
          <div className={css.wrapperPrice}>
            <InfoNannie
              id={nannie.name}
              rating={nannie.rating}
              location={nannie.location}
              price={nannie.price_per_hour}
              className=""
            />

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

        <p className={css.cardDescription}>{nannie.about}</p>

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
