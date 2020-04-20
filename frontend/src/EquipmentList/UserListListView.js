import React from 'react';

import UserListListRow from './UserListListRow';

class UserListListView extends React.Component {
  render() {
    return(
      <div className="UserList-inlab-users-list">
        <div className="UserList-list-main-row">
          <div className="UserList-list-header id">ID</div>
          <div className="UserList-list-header name">Name</div>
          <div className="UserList-list-header major">Major</div>
          <div className="UserList-list-header faculty">Faculty</div>
        </div>

        <UserListListRow />
        <UserListListRow />
        <UserListListRow />
      </div>
    );
  }
}

export default UserListListView;