import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../Button/Button.jsx';
import css from './LogInModal.module.css';
import toast from 'react-hot-toast';
import Icon from '../Icon/Icon.jsx';
import { useState } from 'react';

const LogInModal = ({ closeModal }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

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
          <div className={css.passwordWrapper}>
            <Field
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className={css.input}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={css.errorMessage}
            />
            <Button
              type="button"
              className={css.eyeBtn}
              onClick={togglePasswordVisibility}
              aria-label="Toggle password visibility"
            >
              {showPassword ? (
                <Icon id="icon-eye" width={20} height={20} />
              ) : (
                <Icon id="icon-eye-off" width={20} height={20} />
              )}
            </Button>
          </div>

          <Button type="submit" className={css.btn}>
            Log In
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default LogInModal;
