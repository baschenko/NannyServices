import Icon from '../Icon/Icon.jsx';
import css from './CategoriesItem.module.css';

const CategoriesItem = ({ icon, text }) => {
  return (
    <div className={css.wrapper}>
      <Icon id={icon} width={20} height={20} className={css.icon} />
      <p className={css.text}>{text}</p>
    </div>
  );
};

export default CategoriesItem;
