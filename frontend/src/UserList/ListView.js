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
          // If the first && is false (null) the statement after && won't be executed -> no error
          // (without this check, there will be error if detail user info not yet fetched)
          if ((user.student_info && user.student_info.student_id.toLowerCase().search(searchFilter) !== -1) ||
              (user.extra_info && user.extra_info.identity_card.toLowerCase().search(searchFilter) !== -1) ||  
              (user.first_name.toLowerCase() + ' ' + user.last_name.toLowerCase()).search(searchFilter) !== -1)

            // if the inlabFilter gets true, only return users with their status is 1
            // OR if the inlabFilter gets false, return all users
            // exlude admin (role 1)
            if ((user.status === 1 || !this.props.inlabFilter) && user.role !== 1)
              return (
                <ListRow
                  key={user.id}
                  user={user}
                  updateSelectedUser={this.props.updateSelectedUser}
                  toggleDetailPannelModal={this.props.toggleDetailPannelModal}
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