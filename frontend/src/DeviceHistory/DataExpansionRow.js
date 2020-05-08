import React from 'react';

class DataExpansionRow extends React.Component {
	render() {
    const statusClass = this.props.equipmentSelf.status === 1 ? 'active' : '';

    const conditionClass = this.props.equipmentSelf.condition === 2 ? 'good' :
                            this.props.equipmentSelf.condition === 1 ? 'normal' :
                              this.props.equipmentSelf.condition === 0 ? 'no' :  // Can't be used
                                'severe';

    return(
      <div className={'data-expansion-row ' + this.props.detail}>
        <div className={`DeviceHistory data-expansion-cell id ${statusClass}`} >
          ID
        </div>
        <div className={"DeviceHistory data-expansion-cell " + conditionClass}>
          conditionDescription
        </div>
        <div className="DeviceHistory data-expansion-cell action">
          Action
        </div>
      </div>
    );
  }
}

export default DataExpansionRow;