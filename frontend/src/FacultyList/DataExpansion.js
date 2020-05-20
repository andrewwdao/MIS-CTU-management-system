import React from 'react';

import DataExpansionRow from './DataExpansionRow';
import GeneralPurposeModal from '../Global/GeneralPurposeModal';

class DataExpansion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',

      errorModalMessage: '',
      errorModalActive: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.removeMajor = this.removeMajor.bind(this);
    this.toggleErrorModal = this.toggleErrorModal.bind(this);
  }

  toggleErrorModal() {
    this.setState({
      errorModalActive: !this.state.errorModalActive
    });
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': localStorage.getItem("accessToken"),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        school: this.props.faculty.id,
        major_id: this.state.id,
        major_name: this.state.name
      })
    };

    fetch(localStorage.getItem("apiHost") + /majors/, requestOptions).then(
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
          // alert("Bad request. The major id or major name might already existed or a field is empty.");
          this.setState({
            errorModalMessage: "Not found.",
            errorModalActive: true,
          });
          return '';
        } else if (res.status === 400) {
          console.log(res.status + " Bad request error.");
          // alert("Bad request. The major id or major name might already existed or a field is empty.");
          this.setState({
            errorModalMessage: "Bad request. The major id or major name might already existed or a field is empty.",
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
      major => {
        if (major) {
          this.props.faculty.majors.push(major);

          // Update locally
          this.props.updateDataLocally(this.props.faculty);

          // Clear the id name name field
          this.setState({
            id: '',
            name: ''
          });
        }
      }
    );
  }

  // Remove major from current faculty, then update the whole faculty (locally)
  removeMajor(major) {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Authorization': localStorage.getItem("accessToken"),
        'Content-Type': 'application/json',
      }
    };

    fetch(localStorage.getItem("apiHost") + /majors/ + major.id, requestOptions).then(
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
          this.props.faculty.majors.splice(major.arrayIndex, 1);

          // Call the update here to update locally AFTER the promise finised
          this.props.updateDataLocally('faculties');
        }
      }
    );
  }

	render() {
    let rows = 0;

    if (this.props.faculty.majors) {
      var dataExpansionRows = this.props.faculty.majors.map(
        (major, index) => {
          rows++;
          major.arrayIndex = index;

          return (
            <DataExpansionRow
              major={major}
              updateFacultyByArrayIndex={this.props.updateFacultyByArrayIndex}
              removeMajor={this.removeMajor}
              detail={this.props.detail}
              key={major.id}
              />
          );
        }
      );
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
          Majors: {rows}
        </div>
        <div className="data-expansion-body">

          {dataExpansionRows}

          <form className={'data-expansion-row bottom-row ' + this.props.detail} onSubmit={this.handleFormSubmit}>
            <input
              className="FacultyList data-expansion-txt-inp id"
              name="id"
              value={this.state.id}
              onChange={this.handleInputChange}
              placeholder="ID"
              />
            <input
              className="FacultyList data-expansion-txt-inp name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="Name"
              />
            <button className="FacultyList data-expansion-btn">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default DataExpansion;