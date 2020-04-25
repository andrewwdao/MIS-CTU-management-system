import React from 'react';

class PhotoInput extends React.Component {
  render() {
    return(
      <div className="UserList-photo-inp">
        <label>
          <input
            type="file" accept="image/*"
            className="UserList-adduser-file-inp-default"
            onChange={this.props.handleChange} />
          <div className="UserList-adduser-avatar-container">
            <img
              src={this.props.img}
              alt="Avatar"
              className="UserList-adduser-avatar-img" />
          </div>
        </label>
      </div>
    );
  }
}

export default PhotoInput;