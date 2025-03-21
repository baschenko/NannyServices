import { useSelector } from 'react-redux';
import AppBar from '../AppBar/AppBar.jsx';
import css from './Layout.module.css';
import { selectLoading } from '../../redux/nannies/selectors.js';
import Loader from '../Loader/Loader.jsx';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

export default function Layout({ children }) {
  const isLoading = useSelector(selectLoading);
  const location = useLocation();
  const buildContainerClass = () => {
    return clsx(css.container, location.pathname === '/' && css.isHomePage);
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className={buildContainerClass()}>
        <div className={location.pathname !== '/' && css.wrapper}>
          <AppBar />
          {children}
        </div>
      </div>
    </>
  );
}
