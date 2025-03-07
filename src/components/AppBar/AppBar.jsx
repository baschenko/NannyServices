import { NavLink, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.jsx';
import css from './AppBar.module.css';
import UserAuth from '../UserAuth/UserAuth.jsx';
import clsx from 'clsx';

export default function AppBar() {
  const location = useLocation();

  const buildHeaderClass = () => {
    return clsx(css.header, location.pathname !== '/' && css.isNotHome);
  };

  return (
    <header className={buildHeaderClass()}>
      <NavLink to="/" className={css.logo}>
        <div>Nanny.Services</div>
      </NavLink>
      <div className={css.wrapper}>
        <Navigation />
        <UserAuth />
      </div>
    </header>
  );
}
