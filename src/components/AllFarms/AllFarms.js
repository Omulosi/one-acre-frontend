import React, { useEffect }  from 'react';
import Farm from './Farm';
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
