import React from 'react';

import UserListInlabDataExpansion from './UserListInlabDataExpansion';

class UserListListRow extends React.Component {
  toggleUserDataExpansion(e) {
    if (e.target.classList[0] === 'UserList-list-main-row')
      e.target.classList.toggle('active');
  }

	render() {
		return (
      <div onClick={this.toggleUserDataExpansion} className="UserList-list-main-row" tabIndex="0">
        <div className="UserList-list-data id">B123456</div>
        <div className="UserList-list-data name">Just A Name</div>
        <div className="UserList-list-data major">Just major</div>
        <div className="UserList-list-data faculty">This is Faculty</div>

        <UserListInlabDataExpansion
          detail='' />
      </div>
		);
	}
}

export default UserListListRow;