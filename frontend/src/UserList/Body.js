import React from 'react';

import DetailPannel from './DetailPannel';
import ListView from './ListView';

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUser: {}  // Currently selected user to show on the detail pannel
    };

    this.updateSelectedUser = this.updateSelectedUser.bind(this);
  }

  // Change the info on DetailPannel based on the user got passed to
  // REMEMBER TO FIX THIS EVERYTIME THE USER INFO GET UPDATED
  updateSelectedUser(user) {
    this.setState({
      selectedUser: user
    });
  }

  render() {
    return(
      <div className="body">
        <DetailPannel
          selectedUser={this.state.selectedUser} />
        <ListView
          accessToken={this.props.accessToken}
          host={this.props.host}
          updateSelectedUser={this.updateSelectedUser}
          inlabFilter={this.props.inlabFilter}
          searchFilter={this.props.searchFilter}
          />
      </div>
    );
  }
}

export default Body;