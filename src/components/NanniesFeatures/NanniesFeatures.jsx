import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getNannieInfo } from '../../redux/nannies/operations.js';
import { selectNannie } from '../../redux/nannies/selectors.js';
import Categories from '../Categories/Categories.jsx';
import css from './NanniesFeatures.module.css';

const NanniesFeatures = () => {
  const { nannieId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNannieInfo(nannieId));
  }, [nannieId, dispatch]);

  const nannie = useSelector(selectNannie);

  return (
    nannie && (
      <div className={css.wrapper}>
        <Categories nannie={nannie} />
        <h3 className={css.subTitle}>Vehicle details</h3>
        <ul className={css.listDetails}>
          <li>
            <span> Form</span> {nannie.form}
          </li>
          <li>
            <span> Length</span> {nannie.length}
          </li>
          <li>
            <span> Width</span> {nannie.width}
          </li>
          <li>
            <span> Height</span> {nannie.height}
          </li>
          <li>
            <span> Tank</span> {nannie.tank}
          </li>
          <li>
            <span> Consumption</span> {nannie.consumption}
          </li>
        </ul>
      </div>
    )
  );
};

export default NanniesFeatures;
