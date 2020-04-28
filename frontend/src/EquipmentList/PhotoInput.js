import React from 'react';

class PhotoInput extends React.Component {
  render() {
    return(
      <div className="FacultyList-photo-inp">
        <label>
          <input
            type="file" accept="image/*"
            className="FacultyList-create-faculty-file-inp-default"
            onChange={this.props.handleChange} />
          <div className="FacultyList-create-faculty-photo-container">
            <img
              src={this.props.img}
              alt="Falcuty"
              className="FacultyList-create-faculty-photo" />
          </div>
        </label>
      </div>
    );
  }
}

export default PhotoInput;