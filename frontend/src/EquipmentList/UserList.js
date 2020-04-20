import React from 'react';

import UserListTop from './UserListTop';
import UserListBody from './UserListBody';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inlabFilter: true
    };

    this.toggleInlabFilter = this.toggleInlabFilter.bind(this);
  }

  toggleInlabFilter(e) {
    this.setState({
      inlabFilter: !this.state.inlabFilter
    });
  }

  render() {
    return (
      <div className="main">
        <UserListTop
          toggleInlabFilter={this.toggleInlabFilter}
          inlabFilter={this.state.inlabFilter}
          />

        <UserListBody />
      </div>
    );
  }
}

export default UserList;