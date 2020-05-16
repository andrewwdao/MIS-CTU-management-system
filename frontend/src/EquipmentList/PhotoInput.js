import React from 'react';

class PhotoInput extends React.Component {
  render() {
    return(
      <div className="EquipmentList-photo-inp">
        <label>
          <input
            type="file" accept="image/*"
            className="EquipmentList-create-equipment-file-inp-default"
            onChange={this.props.handleChange} />
          <div className="EquipmentList-create-equipment-photo-container">
            <img
              src={this.props.img}
              alt="Equipment"
              className="EquipmentList-create-equipment-photo" />
          </div>
        </label>
      </div>
    );
  }
}

export default PhotoInput;