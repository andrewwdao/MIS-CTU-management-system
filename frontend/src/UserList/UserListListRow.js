import React from 'react';

import UserListInlabDataExpansion from './UserListInlabDataExpansion';

class UserListListRow extends React.Component {
  constructor(props) {
    super(props);

    this.selectUser = this.selectUser.bind(this);
  }

  toggleUserDataExpansion(e) {
    if (e.target.classList[0] === 'UserList-list-main-row')
      e.target.classList.toggle('active');
  }

  // Need this to pass the current user to the function in props
  // This is a good way to pass parameters from sub component to main component
  // REMEMBER TO FIX THIS EVERYTIME THE USER INFO GET UPDATED
  selectUser() {
    this.props.selectUser(this.props.user);
  }

	render() {
    // Set the class for user ID color based on their status
    // 1: inlab, 0: inactive, -1: expired
    const status = this.props.user.status === 1 ?
                          ' active' :
                          this.props.user.status ===  -1 ?
                            ' expired' :
                            ''
		return (
      <div onClick={this.toggleUserDataExpansion} className="UserList-list-main-row" tabIndex="0">
        <div className={'UserList-list-data id' + status} onClick={this.selectUser}>{this.props.user.id}</div>
        <div className="UserList-list-data name">{this.props.user.name}</div>
        <div className="UserList-list-data major">{this.props.user.major}</div>
        <div className="UserList-list-data faculty">{this.props.user.faculty}</div>

        { // User not in lab (status != 1) then no data expansion needed (not using any equipments)
          this.props.user.status === 1 &&
            <UserListInlabDataExpansion
              detail='' />
        }
      </div>
		);
	}
}

export default UserListListRow;