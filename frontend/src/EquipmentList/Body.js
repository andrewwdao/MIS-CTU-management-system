import React from 'react';

import DetailPannel from './DetailPannel';
import ListView from './ListView';

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedEquipment: {},  // Currently selected equpiment to show on the detail pannel
    };

    this.updateSelectedEquipment = this.updateSelectedEquipment.bind(this);
  }

  // Change the info on DetailPannel based on the Equipment got passed to
  // REMEMBER TO FIX THIS EVERYTIME THE FACULTY INFO GET UPDATED
  updateSelectedEquipment(equipment) {
    this.setState({
      selectedEquipment: equipment
    });
  }

  render() {
    return(
      <div className="body">
        <DetailPannel
          inlabFilter={this.props.inlabFilter}
          selectedEquipment={this.state.selectedEquipment} />
        <ListView
          accessToken={this.props.accessToken}
          host={this.props.host}
          equipments={this.props.equipments}
          updateSelectedEquipment={this.updateSelectedEquipment}
          inlabFilter={this.props.inlabFilter}
          searchFilter={this.props.searchFilter}
          />
      </div>
    );
  }
}

export default Body;