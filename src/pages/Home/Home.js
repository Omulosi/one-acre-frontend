import React  from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Farms from './Farms';

import './styles.scss';

const Home = () => {
  const farms = useSelector(state => state.farm.allFarms);

  return (
    <div className="container dashboard-home">
      <h1 className="title is-size-2">
        Hello!
      </h1>
      <hr />
      <div className="columns" >
        <div className="column card dashboard-card">
          <h1 className="title is-size-4 is-center">Farms you have funded</h1>
          <hr />
          <div className="funded-farms">
            <Farms farms={farms} />
          </div>
        </div>

        <div className="column card dashboard-card">
          <h1 className="title is-size-4">How to fund a Farm</h1>
          <div className="funding-farm">

            <ul>
              <li>Go to <Link  to="/dashboard/farms">All Farms</Link></li>
              <li>Click <strong>Fund</strong> button on an open farm</li>
              <li>Enter number of units you want to buy</li>
              <li>Pay using your preferred payment channel </li>
              <br/>
              <li>{`At the end of farm period, returns are made to your `}
              <Link className="green-text" to="/dashboard/profile/#bank-detail">bank account</Link>
              </li>
            </ul>


          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
