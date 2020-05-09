import React from 'react';

import DataExpansion from './DataExpansion';

class ListRow extends React.Component {
  // Show/hide the currently using equipments section
  toggleDataExpansion(e) {
    if (e.target.classList[0] === 'list-view-main-row')
      e.target.classList.toggle('active');
  }

	render() {
    const conditionClass = this.props.entry.returnCondition === '2' ? 'good' :
                            this.props.entry.returnCondition === '1' ? 'normal' :
                              this.props.entry.returnCondition === '0' ? 'no' :  // Can't be used
                                'severe';

		return (
      <div onClick={this.toggleDataExpansion} className="list-view-main-row" tabIndex="0">
        <div className="DeviceHistory list-view-data datetime">{this.props.entry.getDate + '  ' + this.props.entry.getTime}</div>
        <div className="DeviceHistory list-view-data user-name">{this.props.entry.userName}</div>
        <div className="DeviceHistory list-view-data equipment">{this.props.entry.equipmentName}</div>
        <div className={"DeviceHistory list-view-data device-number " + conditionClass}>{this.props.entry.deviceNumber}</div>
        <DataExpansion
          entry={this.props.entry}
          />
      </div>
		);
	}
}

export default ListRow;