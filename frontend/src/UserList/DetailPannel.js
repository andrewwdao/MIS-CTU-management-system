import React from 'react';

import imgPlaceholder from '../images/photo.png';

import DataExpansion from './DataExpansion';
import GeneralPurposeModal from '../Global/GeneralPurposeModal';
import CreateUserModal from './CreateUserModal';

class DetailPannel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      removeConfirmationModalActive: false,

      errorModalMessage: '',
      errorModalActive: false,

      createUserModalActive: false,
    };

    this.toggleDeleteConfirmationModal = this.toggleDeleteConfirmationModal.bind(this);
    this.toggleErrorModal = this.toggleErrorModal.bind(this);
    this.toggleCreateUserModal = this.toggleCreateUserModal.bind(this);
  }

  toggleErrorModal() {
    this.setState({
      errorModalActive: !this.state.errorModalActive
    });
  }

  toggleDeleteConfirmationModal() {
    this.setState({
      removeConfirmationModalActive: !this.state.removeConfirmationModalActive
    });
  }

  toggleCreateUserModal() {
    this.setState({
      createUserModalActive: !this.state.createUserModalActive
    });
  }

  render() {
    return (
      <div>
        { // Need this in order the make the CreateUserForm gets mounted 
          // => set value for the fields in componentDidMount
          // Trade off: no modal background animation
          this.state.createUserModalActive &&
          <CreateUserModal
            modalActive={this.state.createUserModalActive}
            toggleModal={this.toggleCreateUserModal}
            users={this.props.users}
            user={this.props.selectedUser}
            updateDataLocally={this.props.updateDataLocally}
            updateSelectedUser={this.props.updateSelectedUser}
            />
        }

        <GeneralPurposeModal
          active={this.state.errorModalActive}
          toggle={this.toggleErrorModal}
          header="Error"
          message={this.state.errorModalMessage}
          ok="Return"
          okClick={this.toggleErrorModal}
          />

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
                <div>
                  <DataExpansion
                    equipments={this.props.selectedUser.equipments}
                    detail='detail' />

                  <div className="detail-pannel-btn-group">
                    {/* <button onClick={this.toggleCreateUserModal} className="btn info detail-pannel-btn">EDIT</button> */}
                    {/* <button onClick={this.toggleDeleteConfirmationModal} className="btn caution detail-pannel-btn">
                      DELETE
                    </button> */}
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default DetailPannel;