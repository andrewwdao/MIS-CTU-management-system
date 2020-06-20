import React from 'react';

import DataExpansion from './DataExpansion';

class ListRow extends React.Component {
  constructor(props) {
    super(props);

    this.updateSelectedUser = this.updateSelectedUser.bind(this);
    this.checkInUser = this.checkInUser.bind(this);
  }

  // Show/hide the currently using equipments section
  toggleUserDataExpansion(e) {
    if (e.target.classList[0] === 'list-view-main-row')
      e.target.classList.toggle('active');
  }

  checkInUser() {
    if (this.props.user.status === 1) // Inlab already
      alert("User is already in the lab.");
    else if (this.props.user.status === -1) // Expired
      alert("User expired.");
    else if (this.props.user.status === 0)   // Inlab
      // Pass the current user id to check in
      this.props.checkInUser(this.props.user.id);
    else // Unknow status
      alert("Unknow user status!");
  }

  // Pass the current user to updateSelectedUser function in props
  // This is a good way to pass parameters from sub component to main component
  updateSelectedUser() {
    this.props.updateSelectedUser(this.props.user);
    this.props.toggleDetailPannelModal();
  }

	render() {
    // Set the class for user ID color based on their status
    // 1: inlab, 0: inactive, -1: expired
    const statusClass = this.props.user.status === 1 ?
                          ' active' :
                          this.props.user.status ===  -1 ?
                            ' expired' :
                            ''
		return (
      <div onClick={this.toggleUserDataExpansion} className="list-view-main-row" tabIndex="0">
        <div className={'UserList list-view-data id' + statusClass} onClick={this.updateSelectedUser}>
          {
            this.props.user.student_info ?
              this.props.user.student_info.student_id :
              this.props.user.extra_info.identity_card
          }
        </div>
        <div className="UserList list-view-data name">{this.props.user.last_name + ' ' + this.props.user.first_name}</div>
        <div className="UserList list-view-data major">
          {
            this.props.user.student_info ?
              this.props.user.student_info.major :
              (this.props.user.extra_info ? this.props.user.extra_info.workplace : 'ADMIN')
          }
        </div>
        <div className="UserList list-view-data time-in">
          {
            this.props.user.timeIn ?  // User in lab?
              this.props.user.timeIn :  // Show time in
              (
                this.props.user.status !== -1 ? // not yet expired ?
                  <div onClick={this.checkIn} className="UserList-check-in">Check in</div> : // yes
                  <div className="UserList-check-in expired">Expired</div>   // expired
              )
          }
        </div>

        <DataExpansion
          equipments={this.props.user.equipments}
          detail=''
          />

      </div>
		);
	}
}

export default ListRow;