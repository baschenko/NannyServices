import NannieCard from '../NannieCard/NannieCard.jsx';
import css from './NanniesList.module.css';

const NanniesList = ({ nannies }) => {
  return nannies.map(nannie => (
    <li key={nannie.id} className={css.itemCard}>
      <NannieCard nannie={nannie} />
    </li>
  ));
};

export default NanniesList;
