import React from 'react';

import Top from './Top';
import Body from './Body';

class UserList extends React.Component {
  render() {
    return (
      <div className="main">
        <Top
          toggleInlabFilter={this.props.toggleInlabFilter}
          inlabFilter={this.props.inlabFilter}
          searchFilter={this.props.searchFilter}
          handleFilterChange={this.props.handleFilterChange}
          />

        <Body
          accessToken={this.props.accessToken}
          host={this.props.host}
          users={this.props.users}
          inlabFilter={this.props.inlabFilter}
          searchFilter={this.props.searchFilter}
          />
      </div>
    );
  }
}

export default UserList;