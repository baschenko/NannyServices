import { useSelector } from 'react-redux';
import AppBar from '../AppBar/AppBar.jsx';
import css from './Layout.module.css';
import { selectLoading } from '../../redux/nannies/selectors.js';
import Loader from '../Loader/Loader.jsx';
import { useLocation } from 'react-router-dom';

export default function Layout() {
  const isLoading = useSelector(selectLoading);
  const location = useLocation();

  return (
    <>
      {isLoading && <Loader />}
      <div
        className={[
          css.container,
          location.pathname === '/' && css.isHomePage,
        ].join(' ')}
      >
        <div className={location.pathname !== '/' && css.wrapper}>
          <AppBar />
          {/* {children} */}
        </div>
      </div>
    </>
  );
}
