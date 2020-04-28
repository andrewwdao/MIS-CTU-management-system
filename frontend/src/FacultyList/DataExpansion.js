import React from 'react';

import DataExpansionRow from './DataExpansionRow';

class DataExpansion extends React.Component {
	render() {
    let rows = 0;
    if (this.props.majors) {
        var dataExpansionRows = this.props.majors.map(major => {
        rows++;
        return (
          <DataExpansionRow
            detail={this.props.detail}
            key={major.id}
            major={major}
            />
        )
      });
    }

    return(
      <div className={'data-expansion ' + this.props.detail}>
        <div className="data-expansion-header">
          Majors: {rows}
        </div>
        <div className="data-expansion-body">

          {dataExpansionRows}

          <div className={'data-expansion-row bottom-row ' + this.props.detail}>
            <input className="FacultyList data-expansion-txt-inp id" placeholder="ID" />
            <input className="FacultyList data-expansion-txt-inp name" placeholder="Name" />
            <button className="FacultyList data-expansion-btn">Add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DataExpansion;