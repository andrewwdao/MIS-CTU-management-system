import React from 'react';

import imgPlaceholder from '../UI/icons/photo.png';

import UserListInlabDataExpansion from './UserListInlabDataExpansion';

class UserListDetailPannel extends React.Component {
  render() {
    return (
      <div className="UserList-detail-info-container">
        <div className="UserList-detail-info-picture-container">
          <img alt="img" className="UserList-detail-info-picture" src={imgPlaceholder} />
        </div>
        
        <div className="UserList-detail-info center">
          <div className="UserList-detail-info-label">
            ID:
          </div>
          <div className="UserList-detail-info-content">
            {this.props.selectedUser.id ? this.props.selectedUser.id : '____________'}
          </div>
        </div>
        <div className="UserList-detail-info center">
          <div className="UserList-detail-info-label">
            Name:
          </div>
          <div className="UserList-detail-info-content">
            {this.props.selectedUser.name ? this.props.selectedUser.name : '___________________'}
          </div>
        </div>
        <div className="UserList-detail-info center">
          <div className="UserList-detail-info-label">
            DOB:
          </div>
          <div className="UserList-detail-info-content">
            ________________
          </div>
        </div>
        <div className="UserList-detail-info center">
          <div className="UserList-detail-info-label">
            Phone:
          </div>
          <div className="UserList-detail-info-content">
            ________________
          </div>
        </div>
        <div className="UserList-detail-info center">
          <div className="UserList-detail-info-label">
            Major:
          </div>
          <div className="UserList-detail-info-content">
            {this.props.selectedUser.major ? this.props.selectedUser.major : '_____________________'}
          </div>
        </div>
        <div className="UserList-detail-info center">
          <div className="UserList-detail-info-label">
            Faculty:
          </div>
          <div className="UserList-detail-info-content">
            {this.props.selectedUser.faculty ? this.props.selectedUser.faculty : '________________'}
          </div>
        </div>

        <UserListInlabDataExpansion
          detail='detail' />
        
      </div>
    );
  }
}

export default UserListDetailPannel;