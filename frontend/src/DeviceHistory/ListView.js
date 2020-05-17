import React from 'react';

import ListRow from './ListRow';

class ListView extends React.Component {
  render() {
    let entries = this.props.deviceHistories.map(
      entry => {
         // Need try block to avoid exception when user try to enter some regex (*, ?)
        try {
          // If the filter string is found
          const searchFilter = this.props.searchFilter.toLowerCase();
          if (entry.userId.toLowerCase().search(searchFilter) !== -1 ||
              entry.userName.toLowerCase().search(searchFilter) !== -1 ||
              entry.equipmentName.toLowerCase().search(searchFilter) !== -1 ||
              entry.equipmentId.toLowerCase().search(searchFilter) !== -1 ||
              entry.getDate.search(searchFilter) !== -1 ||
              entry.returnDate.search(searchFilter) !== -1) {
            return (
              <ListRow
                key={entry.getDate + entry.getTime + entry.equipmentId + entry.userId + entry.deviceNumber}
                entry={entry}
                />
            );
          }

          return null;

        } catch(e) {
          console.log(e);
          return null;
        }
      }
    );
    return(
      <div className="DeviceHistory list-view">
        <div className="list-view-main-row">
          <div className="DeviceHistory list-view-header datetime">Date time</div>
          <div className="DeviceHistory list-view-header user-name">User name</div>
          <div className="DeviceHistory list-view-header equipment">Equipment</div>
          <div className="DeviceHistory list-view-header device-number">#</div>
        </div>
        {entries}
      </div>
    );
  }
}

export default ListView;