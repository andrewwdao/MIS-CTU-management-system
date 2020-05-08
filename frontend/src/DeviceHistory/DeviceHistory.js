import React from 'react';

import Top from './Top';
import Body from './Body';

class DeviceHisotry extends React.Component {
  render() {
    return (
      <div className="main">
        <Top
          searchFilter={this.props.searchFilter}
          handleFilterChange={this.props.handleFilterChange}
          />

        <Body
          searchFilter={this.props.searchFilter}
          />
      </div>
    );
  }
}

export default DeviceHisotry;