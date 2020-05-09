import React from 'react';

class DataExpansionRow extends React.Component {
	render() {
    let statusClass = '';
    let conditionClass = '';

    if (this.props.status)
      statusClass = this.props.status === '1' ? 'active' :
                      this.props.status === '0' ? 'inactive' : 
                        'expired';

    if (this.props.condition)
      conditionClass = this.props.condition === '2' ? 'good' :
                        this.props.condition === '1' ? 'normal' :
                          this.props.condition === '0' ? 'no' :  // Can't be used
                            'severe';

    return(
      <div className='DeviceHistory data-expansion-row'>
        <div className='DeviceHistory data-expansion-cell label'>
          {this.props.label}:
        </div>
        <div className={"DeviceHistory data-expansion-cell value " + statusClass + conditionClass}>
          {this.props.value}
        </div>
      </div>
    );
  }
}

export default DataExpansionRow;