import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import css from './BookingForm.module.css';
import Button from '../Button/Button.jsx';
import toast from 'react-hot-toast';

const BookingForm = () => {
  const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(32, 'Name must be at maximum 32 characters')
      .required('Name is required'),

    email: Yup.string()
      .matches(emailRegexp, 'Invalid email address')
      .required('Email is required'),

    date: Yup.date()
      .min(new Date(), 'Date is too early')
      .required('Data is required'),

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
      <h3 className={css.title}>Book your nannie now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.fieldGroup}>
            <Field
              id="name"
              name="name"
              type="text"
              placeholder="Name*"
              className={css.input}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={css.errorMessage}
            />
          </label>
          <label className={css.fieldGroup}>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="Email*"
              className={css.input}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={css.errorMessage}
            />
          </label>
          <label className={css.fieldGroup}>
            <Field
              id="date"
              name="date"
              type="text"
              placeholder="Booking date*"
              className={css.input}
              onBlur={e => {
                e.currentTarget.type = 'text';
              }}
              onFocus={e => {
                e.currentTarget.type = 'date';
              }}
            />
            <ErrorMessage
              name="date"
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
              className={css.input}
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
