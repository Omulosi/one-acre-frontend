import React from 'react';

import Farm from './Farm';
import FarmWrapper from '../../components/AllFarms/FarmWrapper';

const Farms = ({ farms }) => {
  if (farms.length === 0) {
    return (
      <div className="center is-size-5 has-text-primary">
      {`No funded farms yet`}
      </div>
    );
  }

  return (
    <div className="dashboard-home__funded-farms">
      {
        farms.map((farm) => (
        <FarmWrapper title={farm.name} farm={farm} key={farm.id}>
          {
            
            ({title, toggleDetailModal, toggleFundModal, farm}) => (
              <Farm 
                title={title} 
                farm={farm} 
                toggleDetailModal={toggleDetailModal}
                toggleFundModal={toggleFundModal}
              />
          )
        }
        </FarmWrapper>

        ))
      }
    </div>
  )
};

export default Farms;
