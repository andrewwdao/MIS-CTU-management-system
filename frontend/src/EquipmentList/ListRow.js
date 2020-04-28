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
  }


	render() {

    /*==========================================
                DIRTY, LAZY SOLUTION
    ==========================================*/
    var rows = 0;
    for (let i = 0; i < this.props.equipment.equipmentSelfs.length; i++)
      if (this.props.equipment.equipmentSelfs[i].status === 1 || !this.props.inlabFilter)
        rows++;

		return (
      <div onClick={this.toggleEquipmentDataExpansion} className="list-view-main-row" tabIndex="0">
        <div className="EquipmentList list-view-data id" onClick={this.updateSelectedEquipment}>{this.props.equipment.id}</div>
        <div className="EquipmentList list-view-data equipment">{this.props.equipment.name}</div>
        <div className="EquipmentList list-view-data count">{rows}</div>

        <DataExpansion
          inlabFilter={this.props.inlabFilter}
          equipmentSelfs={this.props.equipment.equipmentSelfs}
          detail='' />
      </div>
		);
	}
}

export default ListRow;