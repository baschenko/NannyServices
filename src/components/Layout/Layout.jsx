import { useSelector } from 'react-redux';
import AppBar from '../AppBar/AppBar.jsx';
import css from './Layout.module.css';
import { selectLoading } from '../../redux/nannies/selectors.js';
import Loader from '../Loader/Loader.jsx';

export default function Layout({ children }) {
  const isLoading = useSelector(selectLoading);
  return (
    <>
      {isLoading && <Loader />}
      <div className={css.container}>
        <AppBar />
        {children}
      </div>
    </>
  );
}
