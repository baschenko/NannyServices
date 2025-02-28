import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.section}>
      <div className={css.container}>
        <div className={css.wrapper}>
          <h1 className={css.title}>Make Life Easier for the Family:</h1>
          <h2 className={css.subTitle}>
            Find Babysitters Online for All Occasions
          </h2>
        </div>
        <Link to={'/nannies'} className={css.btn}>
          Get started
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
