import React from 'react';

class DataExpansionRow extends React.Component {
	render() {
    const statusClass = this.props.equipmentSelf.status === 1 ? 'active' : '';

    const conditionClass = this.props.equipmentSelf.condition === 2 ? 'good' :
                            this.props.equipmentSelf.condition === 1 ? 'normal' :
                              this.props.equipmentSelf.condition === 0 ? 'no' :  // Can't be used
                                'severe';

    return(
      <div className={'data-expansion-row ' + this.props.detail}>
        <div className={`EquipmentList data-expansion-cell id ${statusClass}`} >
          {this.props.equipmentSelf.id}
        </div>
        <div className={"EquipmentList data-expansion-cell description " + conditionClass}>
          {this.props.equipmentSelf.conditionDescription}
        </div>
        <div className="EquipmentList data-expansion-cell action">
          {this.props.equipmentSelf.usingBy ? 'U: ' + this.props.equipmentSelf.usingBy : 'Remove'}
        </div>
      </div>
    );
  }
}

export default DataExpansionRow;