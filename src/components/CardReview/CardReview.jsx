import css from './CardReview.module.css';
import Icon from '../Icon/Icon.jsx';

const CardReview = ({ info }) => {
  return (
    <div>
      <div className={css.wrapperHeader}>
        <span className={css.avatar}>{info.reviewer[0]}</span>
        <div>
          <p className={css.name}>{info.reviewer}</p>
          <p className={css.raiting}>
            <Icon id="icon-star" width={16} height={16} className={css.star} />
            {info.rating.toFixed(1)}
          </p>
        </div>
      </div>
      <p>{info.comment}</p>
    </div>
  );
};

export default CardReview;
