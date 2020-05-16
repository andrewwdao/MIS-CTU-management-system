import React from 'react';

import PhotoInput from './PhotoInput';
import InputFilled from '../Global/InputFilled';

import imgBtn from '../images/image.png';

class CreateEquipmentForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      description: '',
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
      <form method="POST" className="EquipmentList-create-equipment-form" onSubmit={this.handleFormSubmit}>
        <PhotoInput
            handleChange={this.handleInputChange}
            img={this.state.photo} />

        <div className="EquipmentList-create-equipment-inp-container col-8-sm">
          <InputFilled
            type="text"
            name="id"
            label="ID"
            value={this.state.id}
            handleChange={this.handleInputChange} />
        </div>
        <div className="EquipmentList-create-equipment-inp-container col-8-sm">
          <InputFilled
            type="text"
            name="name"
            label="Equipment name"
            value={this.state.name}
            handleChange={this.handleInputChange} />
        </div>
        <div className="EquipmentList-create-equipment-inp-container col-8-sm">
          <InputFilled
            type="text"
            name="description"
            label="Equipment description"
            value={this.state.description}
            handleChange={this.handleInputChange} />
        </div>
        
        <div className="EquipmentList-create-equipment-btn-group">
          <input
            className="btn EquipmentList-create-equipment-modal-btn"
            type="submit"
            value="Add"
            onClick={this.handleFormSubmit} />
        </div>
      </form>
    );
  }

}

export default CreateEquipmentForm;