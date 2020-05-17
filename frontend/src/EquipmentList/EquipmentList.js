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
          handleFilterChange={this.props.handleFilterChange}
          getDataList={this.props.getDataList}
          equipments={this.props.equipments}
          updateDataLocally={this.props.updateDataLocally}
          />

        <Body
          equipments={this.props.equipments}
          inlabFilter={this.props.inlabFilter}
          searchFilter={this.props.searchFilter}
          />
      </div>
    );
  }
}

export default EquipmentList;