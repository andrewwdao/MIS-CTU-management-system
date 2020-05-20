import React from 'react';

import DetailPannel from './DetailPannel';
import ListView from './ListView';

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedEquipment: {},  // Currently selected equpiment to show on the detail pannel
      detailPannelModalActive: false,
    };

    this.updateSelectedEquipment = this.updateSelectedEquipment.bind(this);
    this.toggleDetailPannelModal = this.toggleDetailPannelModal.bind(this);
  }

  // Change the info on DetailPannel based on the Equipment got passed to
  // REMEMBER TO FIX THIS EVERYTIME THE FACULTY INFO GET UPDATED
  updateSelectedEquipment(equipment) {
    this.setState({
      selectedEquipment: equipment
    });
  }

  toggleDetailPannelModal() {
    this.setState({
      detailPannelModalActive: !this.state.detailPannelModalActive
    });
  }

  render() {
    return(
      <div className="body">
        <DetailPannel
          inlabFilter={this.props.inlabFilter}
          selectedEquipment={this.state.selectedEquipment}
          modalActive={this.state.detailPannelModalActive}
          toggleModal={this.toggleDetailPannelModal}
          equipments={this.props.equipments}
          updateDataLocally={this.props.updateDataLocally}
          />
        <ListView
          equipments={this.props.equipments}
          updateSelectedEquipment={this.updateSelectedEquipment}
          inlabFilter={this.props.inlabFilter}
          searchFilter={this.props.searchFilter}
          toggleDetailPannelModal={this.toggleDetailPannelModal}
          />
      </div>
    );
  }
}

export default Body;