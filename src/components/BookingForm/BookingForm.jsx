import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './BookingForm.module.css';
import Button from '../Button/Button.jsx';
import toast from 'react-hot-toast';
import imagesDefault from '../../images/default.png';

const BookingForm = ({ nannie }) => {
  const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object().shape({
    address: Yup.string().required('Address is required'),

    phone: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Phone number is required'),

    child_age: Yup.number().required('Child`s age is required'),

    time: Yup.string().required('Time is required'),

    email: Yup.string()
      .matches(emailRegexp, 'Invalid email address')
      .required('Email is required'),

    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(32, 'Name must be at maximum 32 characters')
      .required('Name is required'),

    comment: Yup.string(),
  });

  const initialValues = {
    name: '',
    email: '',
    date: '',
    comment: '',
  };

  const handleSubmit = values => {
    console.log(values);
    toast.success('Successfully booked');
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Make an appointment with a babysitter</h2>
      <p className={css.text}>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </p>
      <div className={css.card}>
        <img
          className={css.image}
          src={nannie.avatar_url !== null ? nannie.avatar_url : imagesDefault}
          alt={nannie.name}
          height="320"
        />
        <div className={css.wrapperTitle}>
          <p className={css.cardSubTitle}>Your nanny</p>
          <h2 className={css.cardTitle}>{nannie.name}</h2>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label>
            <Field
              id="address"
              name="address"
              type="text"
              placeholder="Address"
              className={css.input}
            />
            <ErrorMessage
              name="address"
              component="div"
              className={css.errorMessage}
            />
          </label>
          <label>
            <Field
              id="phone"
              name="phone"
              type="text"
              placeholder="+380"
              className={css.input}
            />
            <ErrorMessage
              name="phone"
              component="div"
              className={css.errorMessage}
            />
          </label>
          <label>
            <Field
              id="child_age"
              name="child_age"
              type="text"
              placeholder="Child's age"
              className={css.input}
            />
            <ErrorMessage
              name="child_age"
              component="div"
              className={css.errorMessage}
            />
          </label>
          <label>
            <Field id="time" name="time" type="time" className={css.input} />
            <ErrorMessage
              name="time"
              component="div"
              className={css.errorMessage}
            />
          </label>
          <label className={css.fieldGroup}>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className={[css.input, css.wide].join(' ')}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={css.errorMessage}
            />
          </label>
          <label className={css.fieldGroup}>
            <Field
              id="name"
              name="name"
              type="text"
              placeholder="Father's or mother's name"
              className={[css.input, css.wide].join(' ')}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={css.errorMessage}
            />
          </label>

          <label className={css.fieldGroup}>
            <Field
              as="textarea"
              id="comment"
              name="comment"
              type="text"
              placeholder="Comment"
              className={[css.input, css.tall].join(' ')}
            />
            <ErrorMessage
              name="comment"
              component="div"
              className={css.errorMessage}
            />
          </label>
          <Button type="submit" className={css.btn}>
            Send
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
