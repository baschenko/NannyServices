// import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// import InfoNannie from '../../components/InfoNannie/InfoNannie.jsx';
// import Price from '../../components/Price/Price.jsx';
import { useState } from 'react';
// import { InfinitySpin } from 'react-loader-spinner';
// import { getNannieInfo } from '../../redux/nannies/operations.js';
// import { selectNannie } from '../../redux/nannies/selectors.js';
import css from './NanniesCardsPage.module.css';
// import BookingForm from '../../components/BookingForm/BookingForm.jsx';
import ImageModal from '../../components/ImageModal/ImageModal.jsx';
import nannies from '../../assets/babysitters.json';
import NannieProfile from '../../components/NannieProfile/NannieProfile.jsx';
import NanniesReviews from '../../components/NanniesReviews/NanniesReviews.jsx';
import Button from '../../components/Button/Button.jsx';

const NanniesCardsPage = () => {
  const { nannieId } = useParams();
  const nannie = nannies.find(nannie => nannie.name === nannieId);

  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState('');

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getNannieInfo(nannieId));
  // }, [nannieId, dispatch]);

  // const nannie = useSelector(selectNannie);

  // const openModal = url => {
  //   setShowModal(true);
  //   setModalUrl(url);
  // };

  const closeModal = () => {
    setShowModal(false);
    setModalUrl('');
  };

  return (
    nannie && (
      <div className={css.section}>
        <div className={css.container}>
          <NannieProfile nannie={nannie} />
          <NanniesReviews nannie={nannie} />
          <Button className={css.btn}>Make an appointment</Button>

          <div className={css.wrapperBooking}>
            {/* <div className={css.wrapperFeatures}>
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
              </div> */}
            {/* <BookingForm /> */}
          </div>
          <ImageModal
            modalIsOpen={showModal}
            closeModal={closeModal}
            src={modalUrl}
          />
        </div>
      </div>
    )
  );
};

export default NanniesCardsPage;
