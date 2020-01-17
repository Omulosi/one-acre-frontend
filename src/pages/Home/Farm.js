import React from 'react';

const Farm = ({ toggleDetailModal, farm}) => {

  return (
      <div className="farm is-flex">
        <span className="is-size-5 is-block">{farm.name}</span>
        <button className="button is-info is-small is-outlined" 
          onClick={toggleDetailModal} style={{marginRight: '0.5em'}}>
          Details
        </button>
      </div>
  );
}

export default Farm;
