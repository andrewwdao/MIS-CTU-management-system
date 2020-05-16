import React from 'react';

import CreateEquipmentForm from './CreateEquipmentForm';

class CreateEquipmentModal extends React.Component {
  render() {
    return (
      <div className={` ${this.props.modalActive ? 'show' : ''}`}>
        <div onClick={this.props.toggleModal} className="modal-background">
        </div>
        <div className="modal-container EquipmentList-modal-container">
          <button onClick={this.props.toggleModal} className="modal-close-btn">✖</button>
          <div className="modal-header">Create</div>
          <div className="modal-body EquipmentList-create-equipment-modal-body">
            <CreateEquipmentForm
              accessToken={this.props.accessToken} />
          </div>
        </div>
      </div>
    );
  }
}


export default CreateEquipmentModal;