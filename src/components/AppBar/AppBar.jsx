import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.jsx';
import css from './AppBar.module.css';
import UserAuth from '../UserAuth/UserAuth.jsx';

export default function AppBar() {
  return (
    <header className={css.header}>
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
