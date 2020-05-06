import React from 'react';

import PhotoInput from './PhotoInput';
import InputFilled from '../Global/InputFilled';

import imgBtn from '../images/image.png';

class CreateFacultyForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      photo: imgBtn,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
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
          return '';
        }
        else if (res.status !== 201) {
          console.log(res.status + " Unexpected error.");
          return '';
        }
        else {
          console.log("Success");
          return res.json();
        }
      }
    );
  }

  render() {
    return (
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
    );
  }

}

export default CreateFacultyForm;