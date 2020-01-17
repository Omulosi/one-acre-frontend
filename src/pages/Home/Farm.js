import React from 'react';

const Farm = ({name}) => {
  return (

      <div className="farm">
        <span className="is-size-5">{name}</span>
        <button className="button is-info is-small is-outlined">
          Farm Details
        </button>
      </div>
  );
}

export default Farm;
