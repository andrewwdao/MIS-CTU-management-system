import React from 'react';

import imgPlaceholder from '../images/photo.png';

import DataExpansion from './DataExpansion';
import GeneralPurposeModal from '../Global/GeneralPurposeModal';
import CreateEquipmentModal from './CreateEquipmentModal';

class DetailPannel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      removeConfirmationModalActive: false,

      errorModalMessage: '',
      errorModalActive: false,

      createEquipmentModalActive: false,
    };

    this.toggleDeleteConfirmationModal = this.toggleDeleteConfirmationModal.bind(this);
    this.toggleErrorModal = this.toggleErrorModal.bind(this);
    this.removeEquipment = this.removeEquipment.bind(this);
    this.toggleCreateEquipmentModal = this.toggleCreateEquipmentModal.bind(this);
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

  toggleCreateEquipmentModal() {
    this.setState({
      createEquipmentModalActive: !this.state.createEquipmentModalActive
    });
  }

  removeEquipment() {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Authorization': localStorage.getItem("accessToken"),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        equipment_id: this.props.selectedEquipment.id
      })
    };

    fetch(localStorage.getItem("apiHost") + '/equipments/' + this.props.selectedEquipment.id, requestOptions).then(
      res => {
        if (res.status === 401) {
          console.log("No permission.");
          // alert("You have no permission to do that");
          this.setState({
            errorModalMessage: "You have no permission to do that.",
            errorModalActive: true,
          });
        } else if (res.status === 404) {
          console.log(res.status + " Not found.");
          // alert("Bad request. The equipment id or equipment name might already existed or a field is empty.");
          this.setState({
            errorModalMessage: "Not found.",
            errorModalActive: true,
          });
          return '';
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
          console.log("DELETED");
          
          this.props.equipments.splice(this.props.selectedEquipment.arrayIndex, 1);

          // Call the update here to update locally AFTER the promise finised
          // this.props.updateDataLocally();

          this.props.updateSelectedEquipment({});
        }
      }
    );

    this.toggleDeleteConfirmationModal();
  }

  render() {
    return (
      <div>
        {
          this.state.createEquipmentModalActive &&
          <CreateEquipmentModal
            modalActive={this.state.createEquipmentModalActive}
            toggleModal={this.toggleCreateEquipmentModal}
            equipments={this.props.equipments}
            equipment={this.props.selectedEquipment}
            updateDataLocally={this.props.updateDataLocally}
            updateSelectedEquipment={this.props.updateSelectedEquipment}
            />
        }

        <GeneralPurposeModal
          active={this.state.removeConfirmationModalActive}
          toggle={this.toggleDeleteConfirmationModal}
          header={"Deleting " + this.props.selectedEquipment.equipment_name}
          message={"Do you really wish to remove " + this.props.selectedEquipment.equipment_name +
                   " (" + this.props.selectedEquipment.equipment_id + ")?"}
          delete="DELETE"
          deleteClick={this.removeEquipment}
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

        <div className={`detail-pannel-modal ${this.props.modalActive ? 'show' : ''}`}>
        
          <div onClick={this.props.toggleModal} className="modal-background mobile-only">
          </div>

          <div className="detail-info-container">

            <button onClick={this.props.toggleModal} className="DetailPannel modal-close-btn mobile-only">✖</button>

            <div className="modal-header mobile-only">Equipment info</div>

            <div className="detail-info-body">
              <div className="detail-info-picture-container">
                <img alt="img" className="detail-info-picture" src={imgPlaceholder} />
              </div>
              
              <div className="detail-info center">
                <div className="detail-info-label">
                  ID:
                </div>
                <div className="detail-info-content">
                  {this.props.selectedEquipment.equipment_id ? this.props.selectedEquipment.equipment_id : '____________'}
                </div>
              </div>
              <div className="detail-info center">
                <div className="detail-info-label">
                  Name:
                </div>
                <div className="detail-info-content">
                  {this.props.selectedEquipment.equipment_name ? this.props.selectedEquipment.equipment_name : '________________'}
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
                <div>
                  <DataExpansion
                    inlabFilter={this.props.inlabFilter}
                    equipment={this.props.selectedEquipment}
                    detail='detail'
                    />

                  <div className="detail-pannel-btn-group">
                    <button className="btn info detail-pannel-btn" onClick={this.toggleCreateEquipmentModal }>EDIT</button>
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