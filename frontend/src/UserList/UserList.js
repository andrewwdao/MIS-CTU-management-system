import React from 'react';

import UserListTop from './UserListTop';
import UserListBody from './UserListBody';

class UserList extends React.Component {
  render() {
    return (
      <div className="main">
        <UserListTop />
        <UserListBody />
      </div>
    );
  }
}

export default UserList;