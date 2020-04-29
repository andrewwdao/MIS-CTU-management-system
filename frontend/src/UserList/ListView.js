import React from 'react';

import ListRow from './ListRow';

class ListView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Track the current selected user in Detail pannel
      // when we make any changes, check if the changed user has this ID
      // if yes, we call updateSelectedUser to update info in the Detail pannel
      selectedUserId: '',
    };

    this.updateSelectedUser = this.updateSelectedUser.bind(this);
  }

  // Track the selected user ID and update the info on Detail pannel
  updateSelectedUser(user) {
    // Track the current selected user ID
    this.setState({
      selectedUserId: user.id
    });

    // Update the info on the Detail pannel
    this.props.updateSelectedUser(user);
  }

  render() {
    const users = this.props.users.map(
      user => {

        // Need try block to avoid exception when user try to enter some regex (*, ?)
        try {

          // If the filter string is found
          const searchFilter = this.props.searchFilter.toLowerCase();
          if (user.id.toLowerCase().search(searchFilter) !== -1 || user.name.toLowerCase().search(searchFilter) !== -1)

            // if the inlabFilter gets true, only return users with their status is 1
            // OR if the inlabFilter gets false, return all users
            if (user.status === 1 || !this.props.inlabFilter)
              return (
                <ListRow
                  key={user.id}
                  user={user}
                  updateSelectedUser={this.props.updateSelectedUser}
                  />
              );
        } catch (e) {
          console.log(e);
        }

        return null;
      }
    );

    return(
      <div className="list-view">
        <div className="list-view-main-row">
          <div className="UserList list-view-header id">ID</div>
          <div className="UserList list-view-header name">Name</div>
          <div className="UserList list-view-header major">Major</div>
          <div className="UserList list-view-header time-in">Time in</div>
        </div>

        {users}
      </div>
    );
  }
}

export default ListView;