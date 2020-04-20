import React from 'react';

import UserListTop from './UserListTop';
import UserListBody from './UserListBody';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inlabFilter: true,  // Show inlab users only or all users
      idFilter: ''        // Filter users by their IDs
    };

    this.toggleInlabFilter = this.toggleInlabFilter.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  // Change the state to show inlab users only or all users
  toggleInlabFilter(e) {
    this.setState({
      inlabFilter: !this.state.inlabFilter
    });
  }

  // Filter the users based on their IDs, also control the text appear on Top search bar
  // Should add filter by name feature
  handleFilterChange(e) {
    e.preventDefault();

    this.setState({
      idFilter: e.target.value
    });
  }

  render() {
    return (
      <div className="main">
        <UserListTop
          toggleInlabFilter={this.toggleInlabFilter}
          inlabFilter={this.state.inlabFilter}
          idFilter={this.state.idFilter}
          handleFilterChange={this.handleFilterChange}
          />

        <UserListBody
          accessToken={this.props.accessToken}
          host={this.props.host}
          inlabFilter={this.state.inlabFilter}
          idFilter={this.state.idFilter}
          />
      </div>
    );
  }
}

export default UserList;