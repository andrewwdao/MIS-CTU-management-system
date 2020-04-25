import React from 'react';

import DataExpansionRow from './DataExpansionRow';

class DataExpansion extends React.Component {
	render() {
    return(
      <div className={'data-expansion ' + this.props.detail}>
        <div className="data-expansion-header">
          Majors: 2
        </div>
        <div className="data-expansion-body">
          <DataExpansionRow detail={this.props.detail} />
          <DataExpansionRow detail={this.props.detail} />

          <div className={'data-expansion-row ' + this.props.detail}>
            <input className="data-expansion-txt-inp" placeholder="Add by ID" />
            <button className="data-expansion-btn">Check</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DataExpansion;