import React from 'react';

import imgPlaceholder from '../images/photo.png';

import DataExpansion from './DataExpansion';
import GeneralPurposeModal from '../Global/GeneralPurposeModal';

class DetailPannel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      removeConfirmationModalActive: false,

      errorModalMessage: '',
      errorModalActive: false,
    };

    this.toggleDeleteConfirmationModal = this.toggleDeleteConfirmationModal.bind(this);
    this.toggleErrorModal = this.toggleErrorModal.bind(this);
    this.removeFaculty = this.removeFaculty.bind(this);
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

  removeFaculty() {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Authorization': localStorage.getItem("accessToken"),
        'Content-Type': 'application/json',
      }
    };

    fetch(localStorage.getItem("apiHost") + /schools/ + this.props.selectedFaculty.id, requestOptions).then(
      res => {
        if (res.status === 401) {
          console.log("No permission.");
          // alert("You have no permission to do that");
          this.setState({
            errorModalMessage: "You have no permission to do that.",
            errorModalActive: true,
          });
        } else if (res.status !== 204) {
          console.log(res.status + " Unexpected error.");
          // alert("Unexpected error happened");
          this.setState({
            errorModalMessage: "Unexpected error happened.",
            errorModalActive: true,
          });
        }

        return res.status;
      }
    ).then(
      status => {
        if (status === 204) {
          console.log("OK");
          // Call the update here to update locally AFTER the promise finised
          this.props.updateFacultyByArrayIndex(this.props.selectedFaculty, -1);

          this.props.updateSelectedFaculty({});
        }
      }
    );

    this.toggleDeleteConfirmationModal();
  }

  render() {
    return (
      <div>
        <GeneralPurposeModal
          active={this.state.removeConfirmationModalActive}
          toggle={this.toggleDeleteConfirmationModal}
          header={"Deleting " + this.props.selectedFaculty.school_name}
          message={"Do you really wish to remove " + this.props.selectedFaculty.school_name +
                   " (" + this.props.selectedFaculty.school_id + ")?"}
          delete="DELETE"
          deleteClick={this.removeFaculty}
          cancel={true}
          />

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
                  {this.props.selectedFaculty.school_id ? this.props.selectedFaculty.school_id : '____________'}
                </div>
              </div>
              <div className="detail-info center">
                <div className="detail-info-label">
                  Faculty:
                </div>
                <div className="detail-info-content">
                  {this.props.selectedFaculty.school_name ? this.props.selectedFaculty.school_name : '________________'}
                </div>
              </div>

              {
                // Only show this when there is selectedFaculty
                this.props.selectedFaculty.id &&
                <div>
                  <DataExpansion
                    faculty={this.props.selectedFaculty}
                    updateFacultyByArrayIndex={this.props.updateFacultyByArrayIndex}
                    detail='detail'
                    />

                  <div className="detail-pannel-btn-group">
                    <button className="btn info detail-pannel-btn">EDIT</button>
                    <button onClick={this.toggleDeleteConfirmationModal} className="btn caution detail-pannel-btn">
                      DELETE
                    </button>
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