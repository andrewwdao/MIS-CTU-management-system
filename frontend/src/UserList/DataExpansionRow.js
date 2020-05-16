import React from 'react';

class DataExpansionRow extends React.Component {
	render() {
    return(
      <div className={'data-expansion-row ' + this.props.detail}>
        <div className="UserList data-expansion-cell id">
          {this.props.equipment.id}
        </div>
        <div className="UserList data-expansion-cell name">
          {this.props.equipment.name}
        </div>
        <div className="UserList data-expansion-cell time">
          {this.props.equipment.time}
        </div>
        <div className="UserList data-expansion-cell action">
          Return
        </div>
      </div>
    );
  }
}

export default DataExpansionRow;