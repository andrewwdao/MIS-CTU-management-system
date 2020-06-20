import React from 'react';

import Top from './Top';
import Body from './Body';

class EquipmentList extends React.Component {
  render() {
    return (
      <div className="main">
        <Top
          toggleInlabFilter={this.props.toggleInlabFilter}
          inlabFilter={this.props.inlabFilter}
          searchFilter={this.props.searchFilter}
          equipments={this.props.equipments}
          handleFilterChange={this.props.handleFilterChange}
          getDataList={this.props.getDataList}
          updateDataLocally={this.props.updateDataLocally}
          />

        <Body
          equipments={this.props.equipments}
          inlabFilter={this.props.inlabFilter}
          searchFilter={this.props.searchFilter}
          updateDataLocally={this.props.updateDataLocally}
          />
      </div>
    );
  }
}

export default EquipmentList;