import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import RatingAndLocation from '../../components/RatingAndLocation/RatingAndLocation.jsx';
import Price from '../../components/Price/Price.jsx';
import { Suspense, useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { getNannieInfo } from '../../redux/nannies/operations.js';
import { selectNannie } from '../../redux/nannies/selectors.js';
import css from './NanniesCardsPage.module.css';
import BookingForm from '../../components/BookingForm/BookingForm.jsx';
import ImageModal from '../../components/ImageModal/ImageModal.jsx';

const NanniesCardsPage = () => {
  const { nannieId } = useParams();

  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNannieInfo(nannieId));
  }, [nannieId, dispatch]);

  const nannie = useSelector(selectNannie);

  const openModal = url => {
    setShowModal(true);
    setModalUrl(url);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalUrl('');
  };

  return (
    nannie && (
      <div className={css.container}>
        <h2 className={css.title}>{nannie.name}</h2>
        <RatingAndLocation
          id={nannieId}
          rating={nannie.rating}
          numberReviews={nannie.reviews.length}
          location={nannie.location}
          className={css.rating}
        />
        <Price price={nannie.price} />
        <ul className={css.listImg}>
          {nannie.gallery.map(picture => (
            <li key={picture.thumb} className={css.itemImg}>
              <img
                src={picture.thumb}
                className={css.img}
                onClick={() => {
                  openModal(picture.original);
                }}
              />
            </li>
          ))}
        </ul>
        <p className={css.text}>{nannie.description}</p>
        <ul className={css.listInfo}>
          <li className={css.itemInfo}>
            <NavLink
              default
              to="features"
              className={({ isActive }) => (isActive ? css.active : undefined)}
            >
              Features
            </NavLink>
          </li>
          <li className={css.itemInfo}>
            <NavLink
              to="reviews"
              className={({ isActive }) => (isActive ? css.active : undefined)}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <div className={css.wrapperBooking}>
          <div className={css.wrapperFeatures}>
            <Suspense
              fallback={
                <InfinitySpin
                  visible={true}
                  width="200"
                  color="#4fa94d"
                  ariaLabel="infinity-spin-loading"
                />
              }
            >
              <Outlet />
            </Suspense>
          </div>
          <BookingForm />
        </div>
        <ImageModal
          modalIsOpen={showModal}
          closeModal={closeModal}
          src={modalUrl}
        />
      </div>
    )
  );
};

export default NanniesCardsPage;
