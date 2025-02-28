import css from './Price.module.css';

const Price = ({ price }) => {
  return <p className={css.cardPrice}>€{price.toFixed(2)}</p>;
};

export default Price;
