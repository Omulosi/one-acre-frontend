import React, { useEffect }  from 'react';
import Farm from './Farm';
import FarmWrapper from './FarmWrapper';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { getAllFarms } from '../../redux/actions/farmActionCreators';

import './styles.scss';


const AllFarms = ({ farm }) => {
  const allFarms = useSelector(state => state.farm.allFarms);
  const errors = useSelector(state => state.farm.errors);
  const user = useSelector(state => state.user.credentials);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(getAllFarms(history));
  } , [dispatch, history])
  
  let farms = [];
  if (user.role === "1") {
    farms = allFarms.filter(farm => farm.createdby===user.id)
  } 

  if (user.role === "0") {
    farms = allFarms;
  }

  return (
    <div className="container all-farms" id="all-farms">
    { user.role==="1"
      ?<h2 className="add-farm-card__heading"> These are all the farms you have added</h2>
      : null
    }

      <div className="columns is-multiline is-centered all-farms__content">
    {
      farms.length
      ? farms.map((farm) => {
          return (
            <FarmWrapper title={farm.name} farm={farm} user={user} key={farm.id}>
            { 
              ({title, toggleDetailModal, toggleFundModal, farm, user}) => (
                <Farm 
                    title={title}
                    farm={farm}
                    toggleDetailModal={toggleDetailModal}
                    toggleFundModal={toggleFundModal}
                    user={user}
                 />

              )
              
            }
            </FarmWrapper>
          )
        })
        : <div className={`notification ${errors? 'is-danger': 'is-info'}`}>
            {errors? errors.message : "No farms to display yet"}
          </div>
      }
      </div>
    </div>
  );
};

export default AllFarms;
