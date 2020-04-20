import React from 'react';

import UserListListRow from './UserListListRow';

class UserListListView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: '1234567',
          name: 'ABC Name',
          major: 'Major',
          faculty: 'This is Faculty',
          status: 1
        },
        {
          id: '4342563',
          name: 'Just BCD',
          major: 'Just major',
          faculty: 'Faculty field',
          status: 0
        },
        {
          id: '2345789',
          name: 'Just DEF Name',
          major: 'Just major',
          faculty: 'This is Faculty',
          status: 1
        },
        {
          id: '4252523',
          name: 'Haha Name',
          major: 'Major',
          faculty: 'Faculty',
          status: 0
        },
        {
          id: '0000000',
          name: 'Expired Name',
          major: 'Major',
          faculty: 'Faculty',
          status: -1
        }
      ]
    };

    this.getUsersList = this.getUsersList.bind(this);
  }

  componentDidMount() {
    // this.userListRefresher = setInterval(this.getUsersList, 5000);
  }

  componentWillUnmount() {
    // clearInterval(this.userListRefresher);
  }

  getUsersList() {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.props.accessToken
      },
    };

    fetch(this.props.host + 'users/', requestOptions).then(
      res =>{
        return res.json();
      }
    ).then(
      data => {
        console.log(data);
      }
    );
  }

  render() {
    const users = this.state.users.map(
      user => {

        // Need try to avoid exception when user try to enter some regex (*, ?)
        try {

          // If the filter string is found
          if (user.id.search(this.props.idFilter) !== -1)

            // if the inlabFilter gets true, only return users with their status is 1 (true == 1)
            // (true == 1 is true but true == -1 or true == 2 is false, why?)
            // if the inlabFilter gets false, return all users
            if (this.props.inlabFilter == user.status || !this.props.inlabFilter)
              return (
                <UserListListRow
                  key={user.id}
                  user={user}
                  selectUser={this.props.selectUser}
                  />
              );
        } catch (e) {
          console.log(e);
        }
      }
    );

    return(
      <div className="UserList-inlab-users-list">
        <div className="UserList-list-main-row">
          <div className="UserList-list-header id">ID</div>
          <div className="UserList-list-header name">Name</div>
          <div className="UserList-list-header major">Major</div>
          <div className="UserList-list-header faculty">Faculty</div>
        </div>

        {users}
      </div>
    );
  }
}

export default UserListListView;