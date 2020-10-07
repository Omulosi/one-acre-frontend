import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { userPasswordReset } from '../../redux/actions/userActionCreators';


import './style.scss';


const ResetPassword = () => {
  const dispatch = useDispatch();
  const showNotification = useSelector(state => state.user.showNotification);

  useEffect(() => {
    dispatch({type: 'CLEAR_ERRORS'});
  },[dispatch])

  const history = useHistory();
  const errors = useSelector(state => state.user.errors, shallowEqual);
  const formik = useFormik({

    initialValues: {
        email: '',
        errors: ''
      },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Please provide an email'),
    }),
    onSubmit: (values, { setSubmitting }) => {
      dispatch(userPasswordReset(values, history, setSubmitting));
      values.email = '';
    },
  });


  return (
    <div className="auth-page">
      <div className="logo">
        <Link to="/" title="OneAcre">One Acre</Link>
      </div>
      {showNotification
          ? (<div className="notification basic-notification is-info is-size-6 reset-popup">
              <button 
                  className="delete"
                  onClick={() => dispatch({type: 'SUCCESS'})}>
              </button>
            {`An email with instructions to reset your password has been sent to the email provided`}
            </div>
          )
          : null
      }

      <div className="auth-container">
        <form className="auth-form" onSubmit={formik.handleSubmit}>
          <h1 className="auth-title">Forgot your password?</h1>
            <p>Enter your email address and we will send you instructions on how to create a new password. </p>

          <p className="help is-danger center">{errors && errors.error}</p>
          
          <div className="error"></div>

          <div className="field">
            <div className="control">
              <input 
                id="email"
                type="text" 
                name="email" 
                value={formik.values.email} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                className="input is-primary" 
                placeholder="Email"
              />
            </div>
          { formik.touched.email && formik.errors.email? (
            <p className="help is-danger">{formik.errors.email}</p>
          ): null }
          </div>

          <button 
            type="submit" 
            className={`button is-fullwidth is-success ${formik.isSubmitting? 'is-loading': ''}`}
            style={{ marginTop: '0.9rem' }}>
            Reset Password
          </button>
        </form>

      </div>
    </div>
  );
}

export default ResetPassword;
