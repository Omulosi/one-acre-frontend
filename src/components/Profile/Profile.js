import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/actions/userActionCreators';

import './styles.scss';

const moment = require('moment');

const Profile = ({ user }) => {
  const { 
    name, 
    confirmed, 
    email, 
    createdon, 
    bank_account_num='',
    bank_account_name='',
    bank_name='',
  } = user;
  const registered = new Date(createdon);
  const timeSinceRegisteration = moment(registered).fromNow();

  const dispatch = useDispatch();
  const errors = useSelector(state => state.user.errors);
  const loading = useSelector(state => state.user.loading);
  const [showUpdate, setShowUpdate] = useState(false);

  const toggleNotification = (e) => {
    setShowUpdate(!showUpdate);
  }

  return (
    <section className="container profile-content">

      <div className="notification is-success" 
          style={{display: `${showUpdate? 'block': 'none'}`}}
      >
      
        <button  className="delete" onClick={toggleNotification}></button>
          Update Successful!
      </div>

    <div className="columns profile-main-section">
      <div className="column is-4 profile-info card  is-8">
        <div className="">
          <div className="title is-size-6 name">{name}</div>
          <div className="email">
            <span className="title is-size-6">Email</span>
            <span className="subtitle address">{email}</span>
          </div>
        </div>

        <div className="password">
          <span>Password</span>
          <br />
          <span>●●●●●●●</span>
          <span className="change-btn">
            <button type="button">Change</button>
          </span>
        </div>
      </div>

      <div className="column is-4 card account-info">
        <div>Account Verified {confirmed ? <FaCheck /> : <FaTimes />}</div>
        <div>Member from {timeSinceRegisteration}</div>
      </div>
    </div>

    <div className="columns profile-main-section ">
      <div className="column is-4 profile-info card  is-12">
          <div className="title is-size-6 name">Bank Information</div>
          <p className="help is-danger center">{errors.error}</p>
          <div className="email">
            <span className="is-size-6" style={{color: '#333'}}>Bank name</span>

            <Formik
              initialValues={{bank_name: `${bank_name}`,}}
              onSubmit={(values, { setSubmitting }) => {
                dispatch(updateUser(user, 'bank_name', values, setSubmitting))
              }}
            >
              <Form>
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <Field className="input is-info" type="text" name="bank_name"/>
                  </div>
                  <div className="control">
                    <button 
                        type="submit" 
                        className={`button is-info ${loading? 'is-loading': ''}`}
                        title='Click to edit'>
                      Edit
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>

          <div className="email">
            <span className="is-size-6" style={{color: '#333'}}>Bank account number</span>

            <Formik
              initialValues={{bank_account_num: `${bank_account_num}`,}}
              onSubmit={(values, { setSubmitting }) => {
                dispatch(updateUser(user, 'bank_account_num', values, setSubmitting))
              }}
            >
              <Form>
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <Field className="input is-info" type="text" name="bank_account_num"/>
                  </div>
                  <div className="control">
                    <button 
                        type="submit"
                        className={`button is-info ${loading? 'is-loading': ''}`}
                        title='Click to edit'>
                      Edit
                    </button>
                  </div>
                </div>
              </Form>

            </Formik>
          </div>


          <div className="email">
            <span className="is-size-6" style={{color: '#333'}}>Bank Account Name</span>

            <Formik
              initialValues={{bank_account_name: `${bank_account_name}`,}}
              onSubmit={(values, { setSubmitting }) => {
                dispatch(updateUser(user, 'bank_account_name', values, setSubmitting))
              }}
            >
              <Form>
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <Field className="input is-info" type="text" name="bank_account_name"/>
                  </div>
                  <div className="control">
                    <button 
                      type="submit"
                      className={`button is-info ${loading? 'is-loading': ''}`}
                      title='Click to edit'>
                      Edit
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
      </div>

    </div>
    </section>
  );
};

export default Profile;

