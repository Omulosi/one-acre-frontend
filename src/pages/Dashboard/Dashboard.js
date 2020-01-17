import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SideBar from '../../components/SideBar/SideBar';
import AllFarms from '../../components/AllFarms/AllFarms';
import Profile from '../../components/Profile/Profile';
import NavBar from '../../components/NavBar/NavBar';

import Home from '../Home/Home';

import './style.scss';

const Dashboard = () => {
  const { path } = useRouteMatch()
  let user = useSelector(state => state.user.credentials);
  user = Object.entries(user).length === 0 && user.constructor === Object?
          JSON.parse(localStorage.getItem('profile')):
          user;

  return (
    <div className="columns is-fullwidth dashboard">
      <div className="column is-2  background-blue sidebar">
        <SideBar user={user}/>
      </div>
      <div className="column is-10 container main-section">
        <NavBar user={user}/>
        <Switch>
          <Route exact path={path} component={Home} />
          <Route path={`${path}/profile`}>
            <Profile user={user} />
          </Route>
          <Route exact path={`${path}/farms`} component={AllFarms} />
        </Switch>
      </div>
    </div>
  )
}

export default Dashboard;
