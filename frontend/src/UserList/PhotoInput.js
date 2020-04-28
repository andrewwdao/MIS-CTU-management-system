import React from 'react';

class PhotoInput extends React.Component {
  render() {
    return(
      <div className="UserList-photo-inp">
        <label>
          <input
            type="file" accept="image/*"
            className="UserList-create-user-file-inp-default"
            onChange={this.props.handleChange} />
          <div className="UserList-create-user-avatar-container">
            <img
              src={this.props.img}
              alt="Avatar"
              className="UserList-create-user-avatar-img" />
          </div>
        </label>
      </div>
    );
  }
}

export default PhotoInput;