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
            {this.props.selectedFaculty.id ? this.props.selectedFaculty.id : '____________'}
          </div>
        </div>
        <div className="detail-info center">
          <div className="detail-info-label">
            Faculty:
          </div>
          <div className="detail-info-content">
            {this.props.selectedFaculty.faculty ? this.props.selectedFaculty.faculty : '________________'}
          </div>
        </div>

        <DataExpansion
          detail='detail' />
        
      </div>
    );
  }
}

export default DetailPannel;