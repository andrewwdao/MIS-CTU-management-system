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
          <div className="modal-header">{this.props.equipment ? this.props.equipment.equipment_name : 'Create'}</div>
          <div className="modal-body EquipmentList-create-equipment-modal-body">
            <CreateEquipmentForm
              toggleModal={this.props.toggleModal}
              equipments={this.props.equipments}
              equipment={this.props.equipment}
              updateDataLocally={this.props.updateDataLocally}
              updateSelectedEquipment={this.props.updateSelectedEquipment}
              />
          </div>
        </div>
      </div>
    );
  }
}


export default CreateEquipmentModal;