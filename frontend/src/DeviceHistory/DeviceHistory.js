import React from 'react';

import Top from './Top';
import Body from './Body';

class DeviceHistory extends React.Component {
  render() {
    return (
      <div className="main">
        <Top
          searchFilter={this.props.searchFilter}
          handleFilterChange={this.props.handleFilterChange}
          />

        <Body
          searchFilter={this.props.searchFilter}
          deviceHistories={this.props.deviceHistories}
          />
      </div>
    );
  }
}

export default DeviceHistory;