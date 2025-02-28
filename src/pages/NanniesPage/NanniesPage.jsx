import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllnannies,
  selectFilter,
  selectPage,
  selectPerPage,
  selectTotal,
} from '../../redux/nannies/selectors.js';
import NanniesList from '../../components/NanniesList/NanniesList.jsx';
import Filter from '../../components/Filter/Filter.jsx';
import css from './NanniesPage.module.css';
import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button.jsx';
import { fetchNannies } from '../../redux/nannies/operations.js';
import { clearItems, setPage } from '../../redux/nannies/slice.js';

const NanniesPage = () => {
  const nannies = useSelector(selectAllnannies);
  const total = useSelector(selectTotal);
  const perPage = useSelector(selectPerPage);
  const totalPage = Math.ceil(total / perPage);
  const page = useSelector(selectPage);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);

      return;
    }
    if (filter) {
      dispatch(clearItems([]));
    }
    const query = Object.fromEntries(
      Object.entries(filter).filter(
        ([, values]) => (values !== false) & (values !== '')
      )
    );
    const queryString = new URLSearchParams(query).toString();

    dispatch(fetchNannies({ page, perPage, filter: queryString }));
  }, [dispatch, isFirstRender, page, perPage, filter]);

  const handleClick = () => {
    dispatch(setPage());
  };

  return (
    <div className={css.container}>
      <Filter />
      <div className={css.catalog}>
        {nannies.length !== 0 ? (
          <ul className={css.listCards}>
            <NanniesList nannies={nannies} />
          </ul>
        ) : (
          <p>Not found, try changing filter</p>
        )}
        {totalPage > page && (
          <Button className={css.btn} onClick={handleClick}>
            Load more
          </Button>
        )}
      </div>
    </div>
  );
};

export default NanniesPage;
