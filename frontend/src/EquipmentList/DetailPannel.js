import React from 'react';

import imgPlaceholder from '../UI/icons/photo.png';

import DataExpansion from './DataExpansion';

class DetailPannel extends React.Component {
  render() {
    return (
      <div className="detail-info-container">
        <div className="detail-info-picture-container">
          <img alt="img" className="detail-info-picture" src={imgPlaceholder} />
        </div>
        
        <div className="detail-info center">
          <div className="detail-info-label">
            ID:
          </div>
          <div className="detail-info-content">
            {this.props.selectedEquipment.id ? this.props.selectedEquipment.id : '____________'}
          </div>
        </div>
        <div className="detail-info center">
          <div className="detail-info-label">
            Name:
          </div>
          <div className="detail-info-content">
            {this.props.selectedEquipment.name ? this.props.selectedEquipment.name : '________________'}
          </div>
        </div>
        <div className="detail-info center">
          <div className="detail-info-label">
            Description:
          </div>
          <div className="detail-info-content">
            {this.props.selectedEquipment.name ? this.props.selectedEquipment.description : '________________'}
          </div>
        </div>

        {
          // Only show this when there is selectedEquipment
          this.props.selectedEquipment.id &&
          <DataExpansion
            inlabFilter={this.props.inlabFilter}
            equipmentSelfs={this.props.selectedEquipment.equipmentSelfs}
            detail='detail' />
        }
        
      </div>
    );
  }
}

export default DetailPannel;