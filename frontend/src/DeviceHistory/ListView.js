import React from 'react';

import ListRow from './ListRow';

class ListView extends React.Component {
  render() {
    let entries = null;
    return(
      <div className="DeviceHistory list-view">
        <div className="list-view-main-row">
          <div className="DeviceHistory list-view-header datetime">Date time</div>
          <div className="DeviceHistory list-view-header user-id">User ID</div>
          <div className="DeviceHistory list-view-header user-name">User name</div>
          <div className="DeviceHistory list-view-header equipment">Equipment</div>
        </div>

        {entries}
      </div>
    );
  }
}

export default ListView;