import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../Button/Button.jsx';
import css from './LogInModal.module.css';
import toast from 'react-hot-toast';

const LogInModal = ({ closeModal }) => {
  const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(emailRegexp, 'Invalid email address')
      .required('Email is required'),

    password: Yup.string()
      .min(3, 'Password must be at least 3 characters')
      .max(32, 'Password must be at maximum 32 characters')
      .required('Password is required'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = values => {
    closeModal();
    console.log(values);
    toast.success('Successfully login');
  };
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Log In</h2>
      <p className={css.text}>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <Field
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className={css.input}
          />
          <ErrorMessage
            name="email"
            component="div"
            className={css.errorMessage}
          />

          <Field
            id="password"
            name="password"
            type="text"
            placeholder="Password"
            className={css.input}
          />
          <ErrorMessage
            name="password"
            component="div"
            className={css.errorMessage}
          />

          <Button type="submit" className={css.btn}>
            Log In
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default LogInModal;
