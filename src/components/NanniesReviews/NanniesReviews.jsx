import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getNannieInfo } from '../../redux/nannies/operations.js';
import { selectNannie } from '../../redux/nannies/selectors.js';
import css from './NanniesReviews.module.css';
import CardReview from '../CardReview/CardReview.jsx';

const NanniesReviews = () => {
  const { nannieId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNannieInfo(nannieId));
  }, [nannieId, dispatch]);

  const nannie = useSelector(selectNannie);
  return (
    nannie && (
      <div className={css.wrapper}>
        <ul>
          {nannie.reviews.map(review => (
            <li key={review.reviewer_name} className={css.itemReview}>
              <CardReview info={review} />
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default NanniesReviews;
