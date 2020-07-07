import React from 'react';

import imgPlaceholder from '../images/photo.png';

import DataExpansion from './DataExpansion';

class DetailPannel extends React.Component {
  render() {
    console.log(this.props.selectedUser);
    return (
      <div className={`${this.props.modalActive ? 'show' : ''}`}>
        <div onClick={this.props.toggleModal} className="modal-background mobile-only">
        </div>

        <div className="detail-info-container">

          <button onClick={this.props.toggleModal} className="DetailPannel modal-close-btn mobile-only">✖</button>

          <div className="modal-header mobile-only">User info</div>

          <div className="detail-info-body">
            <div className="detail-info-picture-container">
              <img alt="img" className="detail-info-picture" src={imgPlaceholder} />
            </div>
            
            <div className="detail-info center">
              <div className="detail-info-label">
                ID:
              </div>
              <div className="detail-info-content">
              {
                this.props.selectedUser.student_info ?
                  this.props.selectedUser.student_info.student_id :
                    (this.props.selectedUser.extra_info ?
                      this.props.selectedUser.extra_info.identity_card :
                      '_________')
              }
              </div>
            </div>
            <div className="detail-info center">
              <div className="detail-info-label">
                Name:
              </div>
              <div className="detail-info-content">
                {this.props.selectedUser.first_name ?
                  this.props.selectedUser.last_name + ' ' + this.props.selectedUser.first_name :
                  '___________________'
                }
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
                Work place:
              </div>
              <div className="detail-info-content">
              {
                this.props.selectedUser.extra_info ?
                  this.props.selectedUser.extra_info.workplace :
                  '_____________'
              }
              </div>
            </div>
            <div className="detail-info center">
              <div className="detail-info-label">
                Major:
              </div>
              <div className="detail-info-content">
                {this.props.selectedUser.student_info ?
                  this.props.selectedUser.student_info.major : 
                  '___________________'
                }
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
          
        </div>
      </div>
    );
  }
}

export default DetailPannel;