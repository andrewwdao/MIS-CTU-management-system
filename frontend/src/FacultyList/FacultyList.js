import React from 'react';

import Top from './Top';
import Body from './Body';

class FacultyList extends React.Component {
  render() {
    return (
      <div className="main">
        <Top
          searchFilter={this.props.searchFilter}
          handleFilterChange={this.props.handleFilterChange}
          getFacultyList={this.props.getFacultyList}
          updateFacultyByArrayIndex={this.props.updateFacultyByArrayIndex}
          />

        <Body
          faculties={this.props.faculties}
          searchFilter={this.props.searchFilter}
          updateFacultyByArrayIndex={this.props.updateFacultyByArrayIndex}
          />
      </div>
    );
  }
}

export default FacultyList;