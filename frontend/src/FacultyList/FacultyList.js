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
          getDataList={this.props.getDataList}
          updateDataLocally={this.props.updateDataLocally}
          faculties={this.props.faculties}
          />

        <Body
          faculties={this.props.faculties}
          searchFilter={this.props.searchFilter}
          updateDataLocally={this.props.updateDataLocally}
          />
      </div>
    );
  }
}

export default FacultyList;