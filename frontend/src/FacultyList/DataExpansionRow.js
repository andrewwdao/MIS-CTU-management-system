import React from 'react';

class DataExpansionRow extends React.Component {
	render() {
    return(
      <div className={'data-expansion-row ' + this.props.detail}>
        <div className="FacultyList data-expansion-cell id">
          {this.props.major.id}
        </div>
        <div className="FacultyList data-expansion-cell">
          {this.props.major.major_name}
        </div>
        <div className="FacultyList data-expansion-cell action">
          Remove
        </div>
      </div>
    );
  }
}

export default DataExpansionRow;