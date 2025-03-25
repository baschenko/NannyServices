import css from './Price.module.css';

const Price = ({ price }) => {
  return <p className={css.cardPrice}>Price / 1 hour: {price.toFixed(2)}$</p>;
};

export default Price;
