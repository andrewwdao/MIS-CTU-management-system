import React from 'react';

import GeneralPurposeModal from '../Global/GeneralPurposeModal';

class DataExpansionRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalActive: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.removeEquipmentSelf = this.removeEquipmentSelf.bind(this);
  }

  toggleModal() {
    this.setState({
      modalActive: !this.state.modalActive
    });
  }


  // Remove equipmentSelf from current equipment, then update the whole equipments (locally)
  removeEquipmentSelf() {
    this.props.removeEquipmentSelf(this.props.equipmentSelf);
    this.toggleModal();
  }

	render() {
    const statusClass = this.props.equipmentSelf.in_used === 1 ? 'active' : '';

    const conditionClass = this.props.equipmentSelf.condition === 2 ? 'good' :
                            this.props.equipmentSelf.condition === 1 ? 'normal' :
                              this.props.equipmentSelf.condition === 0 ? 'no' :  // Can't be used
                                'severe';

    return(
      <div>
        <GeneralPurposeModal
          active={this.state.modalActive}
          toggle={this.toggleModal}
          header={"Deleting device #" + this.props.equipmentSelf.device_number}
          message={"Do you really wish to delete device #" + this.props.equipmentSelf.device_number + " (" + this.props.equipmentSelf.device_status + ")"}
          delete="DELETE"
          deleteClick={this.removeEquipmentSelf}
          cancel={true}
          />

      <div className={'EquipmentList data-expansion-row ' + this.props.detail}>
        <div className={`EquipmentList data-expansion-cell id ${statusClass}`} >
          {this.props.equipmentSelf.id}
        </div>
        <div className={"EquipmentList data-expansion-cell description " + conditionClass}>
          {this.props.equipmentSelf.conditionDescription}
          {conditionClass.charAt(0).toUpperCase() + conditionClass.slice(1)}
        </div>
        <div className="EquipmentList data-expansion-cell action">
          {
            this.props.equipmentSelf.usingBy ?
              'U: ' + this.props.equipmentSelf.usingBy :
              <span onClick={this.toggleModal}>Remove</span>
          }
        </div>
      </div>
      </div>
    );
  }
}

export default DataExpansionRow;