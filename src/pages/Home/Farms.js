import React from 'react';

import Farm from './Farm';

const Farms = ({ farms }) => {
  if (farms.length === 0) {
    return (
      <div className="center is-size-5 has-text-primary">
      {`No funded farms yet`}
      </div>
    );
  }

  return (
    <>
      {
        farms.map((farm) => (
        <Farm name={farm.name} />
        ))
      }
    </>
  )
};

export default Farms;
