import React from 'react';

import DataExpansionRow from './DataExpansionRow';

class DataExpansion extends React.Component {
	render() {
    let rows = 0;
    if (this.props.equipmentSelfs) {
        var dataExpansionRows = this.props.equipmentSelfs.map(equipmentSelf => {

        
        // if the inlabFilter gets true, only return equipmentSelfs with their status is 1
        // OR if the inlabFilter gets false, return all equipmentSelfs
        if (equipmentSelf.status === 1 || !this.props.inlabFilter) {
          rows++;
          return (
            <DataExpansionRow
              detail={this.props.detail}
              key={equipmentSelf.id}
              equipmentSelf={equipmentSelf}
              />
          )
        }
      });
    }

    return(
      <div className={'data-expansion ' + this.props.detail}>
        <div className="data-expansion-header">
          {this.props.inlabFilter ? 'In use' : 'Total'}: {rows}
        </div>
        <div className="data-expansion-body">

          {dataExpansionRows}


        {
          !this.props.inlabFilter &&  // Only show when inlabFilter is false
          <div className={'data-expansion-row bottom-row ' + this.props.detail}>
            <input className="EquipmentList data-expansion-txt-inp id" placeholder="ID" />
            <input className="EquipmentList data-expansion-txt-inp name" placeholder="Name" />
            <button className="EquipmentList data-expansion-btn">Add</button>
          </div>
        }

        </div>
      </div>
    );
  }
}

export default DataExpansion;