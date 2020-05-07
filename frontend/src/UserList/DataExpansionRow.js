import React from 'react';

class DataExpansionRow extends React.Component {
	render() {
    return(
      <div className={'data-expansion-row ' + this.props.detail}>
        <div className="data-expansion-cell id">
          {this.props.equipment.id}
        </div>
        <div className="data-expansion-cell">
          {this.props.equipment.name}
        </div>
        <div className="data-expansion-cell">
          {this.props.equipment.time}
        </div>
        <div className="data-expansion-cell action">
          Return
        </div>
      </div>
    );
  }
}

export default DataExpansionRow;