import React from 'react';

import DataExpansionRow from './DataExpansionRow';
import GeneralPurposeModal from '../Global/GeneralPurposeModal';

class DataExpansion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errorModalMessage: '',
      errorModalActive: false,
    };

    this.createEquipmentSelf = this.createEquipmentSelf.bind(this);
    this.toggleErrorModal = this.toggleErrorModal.bind(this);
  }

  toggleErrorModal() {
    this.setState({
      errorModalActive: !this.state.errorModalActive
    });
  }

  createEquipmentSelf() {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': localStorage.getItem("accessToken"),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        equipment_id: this.props.equipment.equipment_id,
        equipment_name: this.props.equipment.equipment_name,
      })
    };
    
    fetch(localStorage.getItem('apiHost') + '/devices/', requestOptions).then(
      res => {
        if (res.status === 401) {
          console.log("No permission.");
          // alert("You have no permission to do that");
          this.setState({
            errorModalMessage: "You have no permission to do that",
            errorModalActive: true,
          });
          return '';
        } else if (res.status === 404) {
          console.log(res.status + " Not found.");
          // alert("Bad request. The device id or device name might already existed or a field is empty.");
          this.setState({
            errorModalMessage: "Not found.",
            errorModalActive: true,
          });
          return '';
        } else if (res.status === 400) {
          console.log(res.status + " Bad request error.");
          // alert("Bad request. The device id or device name might already existed or a field is empty.");
          this.setState({
            errorModalMessage: "Bad request. The device id or device name might already existed or a field is empty.",
            errorModalActive: true,
          });
          return '';
        } else if (res.status !== 201) {
          console.log(res.status + " Unexpected error.");
          // alert("Unexpected error happened");
          this.setState({
            errorModalMessage: "Unexpected error happened.",
            errorModalActive: true,
          });
          return '';
        } else {
          console.log("Success");
          return res.json();
        }
      }
    ).then(

    );
  }

	render() {
    let rows = 0;
    if (this.props.equipment.devices) {
        var dataExpansionRows = this.props.equipment.devices.map(equipmentSelf => {

        // if the inlabFilter gets true, only return equipmentSelfs with their status is 1
        // OR if the inlabFilter gets false, return all equipmentSelfs
        if (equipmentSelf.status === 1 || !this.props.inlabFilter) {
          rows++;
          return (
            <DataExpansionRow
              detail={this.props.detail}
              key={equipmentSelf.id}
              equipmentSelf={equipmentSelf}
              />
          )
        }
        return null;
      });
    }

    return(
      <div className={'data-expansion ' + this.props.detail}>

        <GeneralPurposeModal
          active={this.state.errorModalActive}
          toggle={this.toggleErrorModal}
          header="Error"
          message={this.state.errorModalMessage}
          ok="Return"
          okClick={this.toggleErrorModal}
          />

        <div className="data-expansion-header">
          {this.props.inlabFilter ? 'In use' : 'Total'}: {rows}
          {!this.props.inlabFilter && <button onClick={this.createEquipmentSelf} className="EquipmentList data-expansion-btn">+</button>}
        </div>
        <div className="data-expansion-body">

          {dataExpansionRows}

        </div>
      </div>
    );
  }
}

export default DataExpansion;