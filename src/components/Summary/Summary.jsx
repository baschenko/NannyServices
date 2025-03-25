import clsx from 'clsx';
import css from './Summary.module.css';

const Summary = ({ age, experience, kidsAge, characters, education }) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        Age: <span className={clsx(css.data, css.accent)}>{age}</span>
      </li>
      <li className={css.item}>
        Experience: <span className={css.data}>{experience}</span>
      </li>
      <li className={css.item}>
        Kids Age: <span className={css.data}>{kidsAge}</span>
      </li>
      <li className={css.item}>
        Characters: <span className={css.data}>{characters}</span>
      </li>
      <li className={css.item}>
        Education: <span className={css.data}>{education}</span>
      </li>
    </ul>
  );
};

export default Summary;
