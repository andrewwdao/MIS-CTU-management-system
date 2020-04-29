import React from 'react';

import imgPlaceholder from '../images/photo.png';

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
            {this.props.selectedFaculty.name ? this.props.selectedFaculty.name : '________________'}
          </div>
        </div>

        {
          // Only show this when there is selectedFaculty
          this.props.selectedFaculty.id &&
          <DataExpansion
            majors={this.props.selectedFaculty.majors}
            detail='detail' />
        }
        
      </div>
    );
  }
}

export default DetailPannel;