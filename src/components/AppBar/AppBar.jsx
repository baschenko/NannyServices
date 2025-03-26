import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.jsx';
import css from './AppBar.module.css';
import UserAuth from '../UserAuth/UserAuth.jsx';
import { Suspense } from 'react';

export default function AppBar() {
  const location = useLocation();

  return (
    <>
      <header
        className={[
          css.header,
          location.pathname !== '/' && css.isNotHome,
        ].join(' ')}
      >
        <div className={css.wrapper}>
          <NavLink to="/" className={css.logo}>
            Nanny.Services
          </NavLink>
          <div className={css.navWrapper}>
            <Navigation />
            <UserAuth />
          </div>
        </div>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
