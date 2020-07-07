import React from 'react';

import DetailPannel from './DetailPannel';
import ListView from './ListView';

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUser: {},  // Currently selected user to show on the detail pannel
      detailPannelModalActive: false,
    };

    this.updateSelectedUser = this.updateSelectedUser.bind(this);
    this.toggleDetailPannelModal = this.toggleDetailPannelModal.bind(this);
  }

  // Change the info on DetailPannel based on the user got passed to
  // REMEMBER TO FIX THIS EVERYTIME THE USER INFO GET UPDATED
  updateSelectedUser(user) {
    this.setState({
      selectedUser: user
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
          selectedUser={this.state.selectedUser}
          modalActive={this.state.detailPannelModalActive}
          toggleModal={this.toggleDetailPannelModal}
          users={this.props.users}
          updateDataLocally={this.props.updateDataLocally}
          />
        <ListView
          users={this.props.users}
          updateSelectedUser={this.updateSelectedUser}
          inlabFilter={this.props.inlabFilter}
          searchFilter={this.props.searchFilter}
          toggleDetailPannelModal={this.toggleDetailPannelModal}
          />
      </div>
    );
  }
}

export default Body;