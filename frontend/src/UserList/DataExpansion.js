import React from 'react';

import DataExpansionRow from './DataExpansionRow';

class DataExpansion extends React.Component {
	render() {
    let rows = 0;
    if (this.props.equipments) {
        var dataExpansionRows = this.props.equipments.map(equipment => {
        rows++;
        return (
          <DataExpansionRow
            detail={this.props.detail}
            key={equipment.id}
            equipment={equipment}
            />
        )
      });
    }

    return (
      <div className={'data-expansion ' + this.props.detail}>
        <div className="data-expansion-header">
          Currently using: {rows}
        </div>
        <div className="data-expansion-body">    
          {dataExpansionRows}
          <div className={'data-expansion-row bottom-row ' + this.props.detail}>
            <input className="data-expansion-txt-inp" placeholder="Add by ID" />
            <button className="data-expansion-btn">Check</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DataExpansion;