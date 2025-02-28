import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.jsx';
import css from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={css.header}>
      <NavLink to="/" className={css.logo}>
        <div>Nanny.Services</div>
      </NavLink>
      <Navigation />
    </header>
  );
}
