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
            {this.props.selectedUser.id ? this.props.selectedUser.id : '____________'}
          </div>
        </div>
        <div className="detail-info center">
          <div className="detail-info-label">
            Name:
          </div>
          <div className="detail-info-content">
            {this.props.selectedUser.name ? this.props.selectedUser.name : '___________________'}
          </div>
        </div>
        <div className="detail-info center">
          <div className="detail-info-label">
            DOB:
          </div>
          <div className="detail-info-content">
            ________________
          </div>
        </div>
        <div className="detail-info center">
          <div className="detail-info-label">
            Phone:
          </div>
          <div className="detail-info-content">
            ________________
          </div>
        </div>
        <div className="detail-info center">
          <div className="detail-info-label">
            Major:
          </div>
          <div className="detail-info-content">
            {this.props.selectedUser.major ? this.props.selectedUser.major : '___________________'}
          </div>
        </div>
        <div className="detail-info center">
          <div className="detail-info-label">
            Faculty:
          </div>
          <div className="detail-info-content">
            {this.props.selectedUser.faculty ? this.props.selectedUser.faculty : '________________'}
          </div>
        </div>

        {
          // Only show this when there is selectedUser
          this.props.selectedUser.id &&
          <DataExpansion
            equipments={this.props.selectedUser.equipments}
            detail='detail' />
        }
        
      </div>
    );
  }
}

export default DetailPannel;