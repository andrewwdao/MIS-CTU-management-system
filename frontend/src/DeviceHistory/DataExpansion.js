import React from 'react';

import DataExpansionRow from './DataExpansionRow';

class DataExpansion extends React.Component {
	render() {
    return(
      <div className="data-expansion">
        <div className="data-expansion-header">
          Details
        </div>
        <div className="DeviceHistory data-expansion-body">
          <DataExpansionRow
            label="User ID"
            value={this.props.entry.userId}
            status={this.props.entry.userStatus}
            />
          <DataExpansionRow
            label="User name"
            value={this.props.entry.userName}
            status={this.props.entry.userStatus}
            />
          <DataExpansionRow
            label="Get time"
            value={this.props.entry.getDate + '  ' + this.props.entry.getTime}
            />
          <DataExpansionRow
            label="Get condition"
            value={this.props.entry.getDescription}
            condition={this.props.entry.getCondition}
            />
          <DataExpansionRow
            label="Return time"
            value={this.props.entry.returnDate + '  ' + this.props.entry.returnTime}
            />
          <DataExpansionRow
            label="Return condition"
            value={this.props.entry.returnDescription}
            condition={this.props.entry.returnCondition}
            />
        </div>
      </div>
    );
  }
}

export default DataExpansion;