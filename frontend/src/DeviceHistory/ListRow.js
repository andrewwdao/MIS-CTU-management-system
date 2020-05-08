import React from 'react';

import DataExpansion from './DataExpansion';

class ListRow extends React.Component {
  // Show/hide the currently using equipments section
  toggleDataExpansion(e) {
    if (e.target.classList[0] === 'list-view-main-row')
      e.target.classList.toggle('active');
  }

	render() {
		return (
      <div onClick={this.toggleDataExpansion} className="list-view-main-row" tabIndex="0">
        <div className="DeviceHistory list-view-data datetime">Date</div>
        <div className="DeviceHistory list-view-data user-id">User ID</div>
        <div className="DeviceHistory list-view-data user-name">User name</div>
        <div className="DeviceHistory list-view-data equipment">Equipment</div>
        <DataExpansion
          />
      </div>
		);
	}
}

export default ListRow;