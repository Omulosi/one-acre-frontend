import React, { useEffect }  from 'react';
import Farm from './Farm';
import FarmWrapper from './FarmWrapper';

import { useSelector, useDispatch } from 'react-redux';

import { getAllFarms } from '../../redux/actions/farmActionCreators';

import './styles.scss';


const AllFarms = ({ farm }) => {
  const farms = useSelector(state => state.farm.allFarms);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllFarms());
  } , [dispatch])

  return (
    <div className="container all-farms">

      <div className="columns is-multiline is-centered all-farms__content">
    {
      farms.length
      ? farms.map((farm) => {
          return (
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
          )
        })
        : <div className="notification is-info">No farms to display yet</div>
      }
      </div>
    </div>
  );
};

export default AllFarms;
