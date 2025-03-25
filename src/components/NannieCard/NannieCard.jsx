import { Link } from 'react-router-dom';
import css from './NannieCard.module.css';

import NannieProfile from '../NannieProfile/NannieProfile.jsx';

const NannieCard = ({ nannie }) => {
  return (
    <div className={css.wrapperCard}>
      <NannieProfile nannie={nannie} />
      <Link className={css.link} to={`/nannies/${nannie.name}`}>
        Read more
      </Link>
    </div>
  );
};

export default NannieCard;
