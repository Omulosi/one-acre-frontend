import React, { useState } from 'react';
import Modal from './Modal';

const Farm = ({ title, farm }) => {
  const [state, setState] = useState({showModal: false});

  const toggleModal = () => setState({showModal: !state.showModal});

  return (
        <div className="column is-5 card farm">
          <div className="farm-detail">
            <header className="farm-title">
              <span className="title is-size-5">{ title }</span>
              {farm.stage && farm.stage == 'closed'? 
                (<span className="tag is-danger">closed</span>):
                null
              }
            </header>
            <dl style={{marginBottom: '0.9em', paddingBottom:'0.5em'}}>
              <dt>{ farm.location &&  `Location` }</dt>
              <dd>{ farm.location }</dd>
              <dt>{ farm.price &&  `Price` }</dt>
              <dd>{ farm.price }</dd>
              <dt>{ farm.units && `units` }</dt>
              <dd>{farm.units}</dd>
              <dt>{ farm.duration && `Duration` }</dt>
              <dd>{ farm.duration }</dd>
              <dt>{ farm.margin && `Profit Margin` }</dt>
              <dd>{ farm.margin }</dd>
            </dl>
            <button className="button is-info is-small is-outlined" 
              onClick={toggleModal} style={{marginRight: '0.5em'}}>
              Details
            </button>
            <button className="button is-success is-small" 
              onClick={toggleModal}>
              Fund
            </button>
          </div>
    { state.showModal? (
      <Modal title={title} closeModal={toggleModal} show={state.showModal}>
        
        <div className="content">
          <h2 className="title is-size-5">Description</h2>
          <p className="">{farm.description}</p>

          <h2 className="title is-size-5">Location</h2>
          <p className="">{farm.location}</p>

          <h2 className="title is-size-5">Start date</h2>
          <p className="">{farm.start_date}</p>

          <h2 className="title is-size-5"># units</h2>
          <p className="">{ farm.units }</p>

          <h2 className="title is-size-5">Price per unit</h2>
          <p className="">{ farm.price }</p>

          <h2 className="title is-size-5">Duration</h2>
          <p className="">{ farm.duration }</p>

          <h2 className="title is-size-5">Farm stage</h2>
          <p className="">{ farm.stage }</p>

          <h2 className="title is-size-5">Profit Margin</h2>
          <p className="">{ farm.margin }</p>
        </div>

      </Modal>
    ): null
    }
       </div>
  )
}

export default Farm;
