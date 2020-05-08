import React from 'react';

import PhotoInput from './PhotoInput';
import InputFilled from '../Global/InputFilled';
import GeneralPurposeModal from '../Global/GeneralPurposeModal';

import imgBtn from '../images/image.png';

class CreateFacultyForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      photo: imgBtn,

      errorModalMessage: '',
      errorModalActive: false,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.toggleErrorModal = this.toggleErrorModal.bind(this);
  }

  toggleErrorModal() {
    this.setState({
      errorModalActive: !this.state.errorModalActive
    });
  }

  handleInputChange(e) {
    // SEARCH FOR "file upload image preview react" or "filereader image react" (StackOverflow)
    if (e.target.type === "file") {
      var file = e.target.files[0];

      if (file && file.type.match('image.*')) {
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = function(e) {
          this.setState({
            photo: [reader.result]
          });

        }.bind(this);
      }
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
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
        school_id: this.state.id,
        school_name: this.state.name
      })
    };

    fetch(localStorage.getItem("apiHost") + /schools/, requestOptions).then(
      res => {
        if (res.status === 401) {
          console.log("No permission.");
          // alert("You have no permission to do that");
          this.setState({
            errorModalMessage: "You have no permission to do that",
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
      faculty => {

        if (faculty) {
            // Turn off the create modal
              this.props.toggleModal();

              // Update the list locally
              this.props.updateFacultyByArrayIndex(-1, faculty);

              this.setState({
                id: '',
                name: '',
                photo: imgBtn,
              });
          }
        }
    );
  }

  render() {
    return (
      <div>

        <GeneralPurposeModal
          active={this.state.errorModalActive}
          toggle={this.toggleErrorModal}
          header="Error"
          message={this.state.errorModalMessage}
          ok="Return"
          okClick={this.toggleErrorModal}
          />

        <form method="POST" className="FacultyList-create-faculty-form" onSubmit={this.handleFormSubmit}>
          <PhotoInput
              handleChange={this.handleInputChange}
              img={this.state.photo} />

          <div className="FacultyList-create-faculty-inp-container col-8-sm">
            <InputFilled
              type="text"
              name="id"
              label="ID"
              value={this.state.id}
              handleChange={this.handleInputChange} />
          </div>
          <div className="FacultyList-create-faculty-inp-container col-8-sm">
            <InputFilled
              type="text"
              name="name"
              label="Faculty name"
              value={this.state.name}
              handleChange={this.handleInputChange} />
          </div>
          
          <div className="FacultyList-create-faculty-btn-group">
            <input
              className="btn FacultyList-create-faculty-modal-btn"
              type="submit"
              value="Add"
              onClick={this.handleFormSubmit} />
          </div>
        </form>
      </div>
    );
  }

}

export default CreateFacultyForm;