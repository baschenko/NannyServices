import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../Button/Button.jsx';
import css from './SignUpModal.module.css';
import toast from 'react-hot-toast';
import { useState } from 'react';
import Icon from '../Icon/Icon.jsx';

const SignUpModal = ({ closeModal }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(32, 'Name must be at maximum 32 characters')
      .required('Name is required'),

    email: Yup.string()
      .matches(emailRegexp, 'Invalid email address')
      .required('Email is required'),

    password: Yup.string()
      .min(3, 'Password must be at least 3 characters')
      .max(32, 'Password must be at maximum 32 characters')
      .required('Password is required'),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = values => {
    closeModal();
    console.log(values);
    toast.success('Successfully registration');
  };
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Registration</h2>
      <p className={css.text}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <Field
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            className={css.input}
          />
          <ErrorMessage
            name="name"
            component="div"
            className={css.errorMessage}
          />
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
            Sign Up
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpModal;
