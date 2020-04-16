import React from 'react';

import UserListDetailPannel from './UserListDetailPannel';
import UserListListView from './UserListListView';

class UserListBody extends React.Component {
  render() {
    return(
      <div className="UserList-body">
        <UserListDetailPannel />
        <UserListListView />
      </div>
    );
  }
}

export default UserListBody;