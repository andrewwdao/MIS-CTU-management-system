import React from 'react';

import DataExpansion from './DataExpansion';

class ListRow extends React.Component {
  constructor(props) {
    super(props);

    this.updateSelectedEquipment = this.updateSelectedEquipment.bind(this);
  }

  componentDidUpdate() {
    if (this.selectedEquipmentId === this.props.equipment.id) {
      this.props.updateSelectedEquipment(this.props.equipment);
    }
  }

  // Show/hide the currently using equipments section
  toggleEquipmentDataExpansion(e) {
    if (e.target.classList[0] === 'list-view-main-row')
      e.target.classList.toggle('active');
  }

  // Need this to pass the current equipment to the function in props
  // This is a good way to pass parameters from sub component to main component
  // REMEMBER TO FIX THIS EVERYTIME THE equipment INFO GET UPDATED
  updateSelectedEquipment() {
    this.props.updateSelectedEquipment(this.props.equipment);
    this.props.toggleDetailPannelModal();
  }


	render() {

    /*==========================================
                DIRTY, LAZY SOLUTION
    ==========================================*/
    var rows = 0;
    
    // This if to check if the equipment from getDataList is fully updated
    // The equipments are updated one by one so if the equipment in dataList hasn't got updated
    // it doesn't have any devices
    // (dataList items don't have devices, only dataFulls have)
    if (this.props.equipment.devices)
    for (let i = 0; i < this.props.equipment.devices.length; i++)
      if (this.props.equipment.devices[i].status === 1 || !this.props.inlabFilter)
        rows++;

		return (
      <div onClick={this.toggleEquipmentDataExpansion} className="list-view-main-row" tabIndex="0">
        <div className="EquipmentList list-view-data id" onClick={this.updateSelectedEquipment}>{this.props.equipment.equipment_id}</div>
        <div className="EquipmentList list-view-data equipment">{this.props.equipment.equipment_name}</div>
        <div className="EquipmentList list-view-data count">{rows}</div>

        <DataExpansion
          inlabFilter={this.props.inlabFilter}
          equipments={this.props.equipments}
          detail='' />
      </div>
		);
	}
}

export default ListRow;