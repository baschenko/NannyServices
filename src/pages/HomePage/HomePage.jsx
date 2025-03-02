import { Link, useLocation } from 'react-router-dom';
import css from './HomePage.module.css';
import Icon from '../../components/Icon/Icon.jsx';

const HomePage = () => {
  const location = useLocation();

  console.log('location: ', location.pathname === '/');

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
        <div className={css.counter}>
          <Icon
            id="icon-jackdaw"
            width={30}
            height={30}
            className={css.jackdaw}
          />
          <div>
            <p className={css.textCounter}>Experienced nannies</p>
            <p className={css.valueCounter}>15,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
