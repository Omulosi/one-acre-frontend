import React from 'react';
import { Link } from 'react-router-dom';

import toggleNavbar from '../../utils/toggleNavbar';

import './styles.scss';

const NavBar = ({user}) => {
  return (
    <div>

        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand" >
            <Link to="/" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={toggleNavbar}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </Link>
          </div>

          <div  id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <Link to="/" className="navbar-item">
                Home
              </Link>

              <Link to="/dashboard" className="navbar-item">
                Our Process
              </Link>

              <Link to="/dashboard/farms" className="navbar-item">
                Farms
              </Link>

              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link">
                  { user.email }
                </Link>

                <div className="navbar-dropdown">
                  <Link to="/dashboard/profile" className="navbar-item">
                    Profile
                  </Link>
                  <Link to="/dashboard/profile" className="navbar-item">
                    Bank Account
                  </Link>
                  <hr className="navbar-divider"/>
                  <a href="#" className="navbar-item">
                    Sign Out
                  </a>
                </div>
              </div>
            </div>

          </div>
        </nav>


    </div>
  );
}

export default NavBar;
