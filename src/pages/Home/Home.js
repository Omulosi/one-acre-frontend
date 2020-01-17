import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Home = () => {
  return (
    <div className="container dashboard-home">
      <h1 className="title is-size-2">
        Hello, John!
      </h1>
      <hr />
      <div className="columns" >
        <div className="column card dashboard-card">
          <h1 className="title is-size-4 is-center">Farms you have funded</h1>
          <hr />
          <div className="funded-farms">
            <div className="farm">
              <span className="is-size-5">{`Rice farm in Mwea`}</span>
              <button className="button is-primary is-small is-outlined">
                Farm Details
              </button>
            </div>
            <div className="farm">
              <span className="is-size-5">{`Rice farm in Mwea`}</span>
              <button className="button is-primary is-small is-outlined">
                Farm Details
              </button>
            </div>
          </div>
            <div className="farm">
              <span className="is-size-5">{`Rice farm in Mwea`}</span>
              <button className="button is-primary is-small is-outlined">
                Farm Details
              </button>
            </div>
        </div>{/* end 1st col */}
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
