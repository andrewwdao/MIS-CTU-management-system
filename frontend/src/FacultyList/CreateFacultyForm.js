import React from 'react';

import PhotoInput from './PhotoInput';
import InputFilled from '../InputFilled';

import imgBtn from '../UI/icons/image.png';

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