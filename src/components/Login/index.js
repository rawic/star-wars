import React, { useState } from 'react';
import { Notification, Form, Wrapper } from '@components';
import { userActions } from '../../redux/actions';
import { Formik } from 'formik';
import * as EmailValidator from 'email-validator';
import * as Yup from 'yup';
import cookies from 'next-cookies';

const Login = () => {
  return (
    <Wrapper>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          const error = await userActions.login(values.email, values.password);

          if (error) {
            setErrors({ status: error });
          }
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required('Email is required'),
          password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.'),
        })}
      >
        {(props) => {
          return (
            <>
              {props.errors.status && (
                <Notification $error>{props.errors.status}</Notification>
              )}
              <Form {...props} />
            </>
          );
        }}
      </Formik>
      <div className="credentials">
        <p className="heading">Login credentials:</p>
        username: admin@admin.com
        <br />
        password: password
      </div>
    </Wrapper>
  );
};

export default Login;
