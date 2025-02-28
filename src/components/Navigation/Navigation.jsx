import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <>
      <nav className={css.navigation}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>

        <NavLink className={buildLinkClass} to="/nannies">
          Nannies
        </NavLink>

        <NavLink className={buildLinkClass} to="/favorite">
          Favorite
        </NavLink>
      </nav>
    </>
  );
}
