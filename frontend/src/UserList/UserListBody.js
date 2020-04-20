import React from 'react';

import UserListDetailPannel from './UserListDetailPannel';
import UserListListView from './UserListListView';

class UserListBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUser: {}  // Currently selected user to show on the detail pannel
    };

    this.selectUser = this.selectUser.bind(this);
  }

  // Change the info on UserListDetailPannel based on the user got passed to
  // REMEMBER TO FIX THIS EVERYTIME THE USER INFO GET UPDATED
  selectUser(user) {
    this.setState({
      selectedUser: user
    });
  }

  render() {
    return(
      <div className="UserList-body">
        <UserListDetailPannel
          selectedUser={this.state.selectedUser} />
        <UserListListView
          accessToken={this.props.accessToken}
          host={this.props.host}
          selectUser={this.selectUser}
          inlabFilter={this.props.inlabFilter}
          idFilter={this.props.idFilter}
          />
      </div>
    );
  }
}

export default UserListBody;