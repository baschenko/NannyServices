// import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// import InfoNannie from '../../components/InfoNannie/InfoNannie.jsx';
// import Price from '../../components/Price/Price.jsx';
import { useState } from 'react';
// import { InfinitySpin } from 'react-loader-spinner';
// import { getNannieInfo } from '../../redux/nannies/operations.js';
// import { selectNannie } from '../../redux/nannies/selectors.js';
import css from './NanniesCardsPage.module.css';
import BookingForm from '../../components/BookingForm/BookingForm.jsx';
import LayoutModal from '../../components/LayoutModal/LayoutModal.jsx';
import nannies from '../../assets/babysitters.json';
import NannieProfile from '../../components/NannieProfile/NannieProfile.jsx';
import NanniesReviews from '../../components/NanniesReviews/NanniesReviews.jsx';
import Button from '../../components/Button/Button.jsx';

const NanniesCardsPage = () => {
  const { nannieId } = useParams();
  const nannie = nannies.find(nannie => nannie.name === nannieId);

  const [showModal, setShowModal] = useState(false);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getNannieInfo(nannieId));
  // }, [nannieId, dispatch]);

  // const nannie = useSelector(selectNannie);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    nannie && (
      <div className={css.section}>
        <div className={css.container}>
          <NannieProfile nannie={nannie} />
          <NanniesReviews nannie={nannie} />
          <Button className={css.btn} onClick={openModal}>
            Make an appointment
          </Button>

          <LayoutModal modalIsOpen={showModal} closeModal={closeModal}>
            <BookingForm nannie={nannie} closeModal={closeModal} />
          </LayoutModal>
        </div>
      </div>
    )
  );
};

export default NanniesCardsPage;
