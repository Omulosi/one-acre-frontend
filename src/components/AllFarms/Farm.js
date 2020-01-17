import React, { useState } from 'react';
import Modal from './Modal';
import FundPage from './FundPage';
import DetailPage from './DetailPage';

const Farm = ({ title, farm }) => {
  const [detailModal, setDetailModal] = useState({showDetailModal: false});
  const [fundModal, setFundModal] = useState({showFundModal: false});

  const toggleDetailModal = () => {
    setDetailModal({showDetailModal: !detailModal.showDetailModal});
  }

  const toggleFundModal = () => {
    setFundModal({showFundModal: !fundModal.showFundModal});
  }

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
              onClick={toggleDetailModal} style={{marginRight: '0.5em'}}>
              Details
            </button>
            <button className="button is-info is-small" 
              onClick={toggleFundModal}>
              Fund
            </button>
          </div>
            { detailModal.showDetailModal? (
              <Modal title={title} closeModal={toggleDetailModal} show={detailModal.showDetailModal}>
                
              <DetailPage farm={farm} />

              </Modal>
              ): null
            }


            { fundModal.showFundModal? (
              <Modal title={title} closeModal={toggleFundModal} show={fundModal.showFundModal}>
                
                <FundPage farm={farm}/>

              </Modal>
              ): null
            }


       </div>
  )
}

export default Farm;
