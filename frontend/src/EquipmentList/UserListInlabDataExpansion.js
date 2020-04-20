import React from 'react';

import UserListInlabDataExpansionRow from './UserListInlabDataExpansionRow';

class UserListInlabDataExpansion extends React.Component {
	render() {
    return(
      <div className={'UserList-inlab-data-expansion ' + this.props.detail}>
        <div className="UserList-inlab-data-expansion-header">
          Currently using: 2
        </div>
        <div className="UserList-inlab-data-expansion-body">
          <UserListInlabDataExpansionRow detail={this.props.detail} />
          <UserListInlabDataExpansionRow detail={this.props.detail} />

          <div className={'UserList-inlab-data-expansion-row ' + this.props.detail}>
            <input className="UserList-inlab-data-expansion-txt-inp" placeholder="Add by ID" />
            <button className="UserList-inlab-data-expansion-btn">Check</button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserListInlabDataExpansion;