import React from 'react';

const Farm = ({ title, toggleDetailModal, toggleFundModal, farm }) => {

  return (
        <>
          <header className="farm-title">
            <span className="title is-size-5">{ title }</span>
            {farm.stage && farm.stage === 'closed'? 
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
            onClick={toggleDetailModal} style={{marginRight: '0.5em'}}>
            Details
          </button>
          <button className="button is-info is-small" 
            onClick={toggleFundModal}>
            Fund
          </button>
        </>
  )
}

export default Farm;
