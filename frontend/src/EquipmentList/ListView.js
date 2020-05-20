import React from 'react';

import ListRow from './ListRow';

class ListView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Track the current selected equipment in Detail pannel
      // when we make any changes, check if the changed equipment has this ID
      // if yes, we call updateSelectedEquipment to update info in the Detail pannel
      selectedEquipmentId: '',
    };
  }

  // Track the selected equipment ID and update the info on Detail pannel
  updateSelectedEquipment(equipment) {
    // Track the current selected equipment ID
    this.setState({
      selectedEquipmentId: equipment.id
    });

    // Update the info on the Detail pannel
    this.props.updateSelectedEquipment(equipment);
  }

  render() {
    const equipments = this.props.equipments.map(
      equipment => {

        // Need try block to avoid exception when equipment try to enter some regex (*, ?)
        try {
          // If the filter string is found
          const searchFilter = this.props.searchFilter.toLowerCase();
          if (equipment.equipment_id.toLowerCase().search(searchFilter) !== -1 ||
              equipment.equipment_name.toLowerCase().search(searchFilter) !== -1)
            return (
              <ListRow
                key={equipment.equipment_id}
                equipment={equipment}
                equipments={this.props.equipments}
                inlabFilter={this.props.inlabFilter}
                selectedEquipmentId={this.props.selectedEquipmentId}
                updateSelectedEquipment={this.props.updateSelectedEquipment}
                toggleDetailPannelModal={this.props.toggleDetailPannelModal}
                />
            );
        } catch (e) {
          console.log(e);
          return null;
        }

        return null;
      }
    );

    return(
      <div className="list-view">
        <div className="list-view-main-row">
          <div className="EquipmentList list-view-header id">ID</div>
          <div className="EquipmentList list-view-header equipment">Equipment</div>
          <div className="EquipmentList list-view-header count">
            {this.props.inlabFilter ? 'In use' : 'Total'}
          </div>
        </div>

        {equipments}
      </div>
    );
  }
}

export default ListView;