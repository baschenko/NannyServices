import { useSelector } from 'react-redux';
import { selectFavoriteItems } from '../../redux/nannies/selectors.js';
import NanniesList from '../../components/NanniesList/NanniesList.jsx';
import css from './FavoritePage.module.css';

const FavoritePage = () => {
  const nannies = useSelector(selectFavoriteItems);

  return (
    <div className={css.container}>
      <div className={css.catalog}>
        {nannies.length !== 0 ? (
          <ul className={css.listCards}>
            <NanniesList nannies={nannies} />
          </ul>
        ) : (
          <p>There is nothing yet. Choose your favorites from the catalog</p>
        )}
      </div>
    </div>
  );
};

export default FavoritePage;
