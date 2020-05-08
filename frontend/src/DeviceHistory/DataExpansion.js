import React from 'react';

import DataExpansionRow from './DataExpansionRow';

class DataExpansion extends React.Component {
	render() {
    let dataExpansionRows = null;
    return(
      <div className="data-expansion">
        <div className="data-expansion-header">
          Header
        </div>
        <div className="data-expansion-body">
          {dataExpansionRows}
        </div>
      </div>
    );
  }
}

export default DataExpansion;