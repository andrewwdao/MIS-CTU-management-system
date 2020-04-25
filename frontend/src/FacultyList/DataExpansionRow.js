import React from 'react';

class DataExpansionRow extends React.Component {
	render() {
    return(
      <div className={'data-expansion-row ' + this.props.detail}>
        <div className="data-expansion-cell id">
          WH0001
        </div>
        <div className="data-expansion-cell">
          Hand drill
        </div>
        <div className="data-expansion-cell">
          09:42 AM
        </div>
        <div className="data-expansion-cell action">
          Return
        </div>
      </div>
    );
  }
}

export default DataExpansionRow;