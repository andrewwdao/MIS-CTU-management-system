import React from 'react';

import Top from './Top';
import Body from './Body';

class FacultyList extends React.Component {
  render() {
    return (
      <div className="main">
        <Top
          toggleInlabFilter={this.props.toggleInlabFilter}
          inlabFilter={this.props.inlabFilter}
          searchFilter={this.props.searchFilter}
          handleFilterChange={this.props.handleFilterChange}
          />

        <Body
          accessToken={this.props.accessToken}
          host={this.props.host}
          equipments={this.props.equipments}
          inlabFilter={this.props.inlabFilter}
          searchFilter={this.props.searchFilter}
          />
      </div>
    );
  }
}

export default FacultyList;