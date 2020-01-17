import React, { useState } from 'react';
import Farm from './Farm';

import './styles.scss';

import resp from '../../data';
console.log(resp.data);

const AllFarms = () => {
  const [farms, setFarms] = useState(resp.data);

  return (
    <div className="container all-farms">

      <div className="buttons">
        <button className="button is-info">All</button>
        <button className="button is-success">Open</button>
        <button className="button is-danger">Closed</button>
      </div>


      <div className="columns is-multiline is-centered all-farms__content">{
    farms.map((farm) => {
      return (<Farm title={farm.name} farm={farm} key={farm.id}/>)
    })
      }
      </div>
    </div>
  );
}

export default AllFarms;
