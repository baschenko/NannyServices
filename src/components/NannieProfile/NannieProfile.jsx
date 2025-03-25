import Summary from '../Summary/Summary.jsx';
import css from './NannieProfile.module.css';
import imagesDefault from '../../images/default.png';
import Icon from '../Icon/Icon.jsx';
import InfoNannie from '../InfoNannie/InfoNannie.jsx';
import clsx from 'clsx';
import {
  addToFavorite,
  deleteFromFavorite,
} from '../../redux/nannies/slice.js';
import { useDispatch, useSelector } from 'react-redux';

import { selectFavoriteItems } from '../../redux/nannies/selectors.js';

const NannieProfile = ({ nannie }) => {
  const dispatch = useDispatch();

  const favoriteItems = useSelector(selectFavoriteItems);

  const isFavorite = favoriteItems.find(
    favorite => favorite.name === nannie.name
  );

  const calculateAge = birthday => {
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const birthday = new Date(nannie.birthday);
  const newAge = calculateAge(birthday);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(deleteFromFavorite(nannie.name));
      return;
    }
    dispatch(addToFavorite(nannie));
  };

  return (
    <div className={css.wrapper}>
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
        <Summary
          age={newAge}
          experience={nannie.experience}
          kidsAge={nannie.kids_age}
          characters={nannie.characters
            .map(
              character =>
                character.charAt(0).toUpperCase() + character.slice(1)
            )
            .join(', ')}
          education={nannie.education}
        />
        <p className={css.cardDescription}>{nannie.about}</p>
      </div>
    </div>
  );
};

export default NannieProfile;
