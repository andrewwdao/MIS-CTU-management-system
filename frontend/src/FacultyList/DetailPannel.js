import React from 'react';

import imgPlaceholder from '../images/photo.png';

import DataExpansion from './DataExpansion';

class DetailPannel extends React.Component {
  render() {
    return (
      <div className={`detail-pannel-modal ${this.props.modalActive ? 'show' : ''}`}>
        <div onClick={this.props.toggleModal} className="modal-background mobile-only">
        </div>

        <div className="detail-info-container">
        
          <button onClick={this.props.toggleModal} className="DetailPannel modal-close-btn mobile-only">✖</button>

          <div className="modal-header mobile-only">Faculty info</div>

          <div className="detail-info-body">
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
                facultyServerId={this.props.selectedFaculty.serverId}
                majors={this.props.selectedFaculty.majors}
                detail='detail' />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default DetailPannel;