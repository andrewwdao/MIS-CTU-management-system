import React from 'react';

import Top from './Top';
import Body from './Body';

class UserList extends React.Component {
  render() {
    return (
      <div className="main">
        <Top
          toggleInlabFilter={this.props.toggleInlabFilter}
          inlabFilter={this.props.inlabFilter}
          searchFilter={this.props.searchFilter}
          users={this.props.equipments}
          handleFilterChange={this.props.handleFilterChange}
          getDataList={this.props.getDataList}
          updateDataLocally={this.props.updateDataLocally}
          />

        <Body
          users={this.props.users}
          inlabFilter={this.props.inlabFilter}
          searchFilter={this.props.searchFilter}
          updateDataLocally={this.props.updateDataLocally}
          />
      </div>
    );
  }
}

export default UserList;