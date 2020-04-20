import React from 'react';

class UserListInlabDataExpansionRow extends React.Component {
	render() {
    return(
      <div className={'UserList-inlab-data-expansion-row ' + this.props.detail}>
        <div className="UserList-inlab-data-expansion-cell id">
          WH0001
        </div>
        <div className="UserList-inlab-data-expansion-cell">
          Hand drill
        </div>
        <div className="UserList-inlab-data-expansion-cell">
          09:42 AM
        </div>
        <div className="UserList-inlab-data-expansion-cell action">
          Return
        </div>
      </div>
    );
  }
}

export default UserListInlabDataExpansionRow;