import React from 'react';

import ListRow from './ListRow';

class ListView extends React.Component {
  render() {
    let entries = this.props.inOutHistories.map(
      entry => {
        // Need try block to avoid exception when user try to enter some regex (*, ?)
        try {
          // If the filter string is found
          const searchFilter = this.props.searchFilter.toLowerCase();
          if (entry.user.id.toLowerCase().search(searchFilter) !== -1 ||
              entry.user.name.toLowerCase().search(searchFilter) !== -1 ||
              entry.date.search(searchFilter) !== -1) {
            return (
              <ListRow
                key={entry.date + entry.time + entry.user.id}
                user={entry.user}
                date={entry.date}
                time={entry.time}
                />
            );
          }

          return null;

        } catch(e) {
          console.log(e);
        }
      }
    );

    return(
      <div className="InOutHistory list-view">
        <div className="list-view-main-row">
          <div className="InOutHistory list-view-header date">Date</div>
          <div className="InOutHistory list-view-header time">Time</div>
          <div className="InOutHistory list-view-header user-id">User ID</div>
          <div className="InOutHistory list-view-header user-name">User name</div>
        </div>

        {entries}
      </div>
    );
  }
}

export default ListView;