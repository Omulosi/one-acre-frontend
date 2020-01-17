import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

import { logout } from '../../utils/logout';

import './styles.scss';

const SideBar = () => {
  const history = useHistory();
  return (
    <div className="sidebar-content">
      <div className="title is-size-3 sidebar-content__logo">
        <span>One Acre</span>
      </div>
      <div className="sidebar-content__menu-items">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/dashboard/farms">All Farms</NavLink>
        <NavLink to="/dashboard/profile">Profile</NavLink>
        <div className="sidebar-content__logout" 
          onClick={() => logout(history)}>
          <span>Logout</span>
          <FaSignOutAlt className="logout-icon"/>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
