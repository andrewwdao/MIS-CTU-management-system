import React from 'react';

import InputFilled from './InputFilled';
import UserListPhotoInput from './UserListPhotoInput';

class UserListAdduserAccountSection extends React.Component {
  render() {
    return (
      <div className="col-12-sm col-6-md UserList-adduser-section">
        <div className="UserList-adduser-section-title">
          Account information
        </div>
        <div className="UserList-adduser-inp-container col-12-sm">
          <UserListPhotoInput
            handleChange={this.props.handleChange}
            img={this.props.imgSrc} />
        </div>
        <div className="UserList-adduser-inp-container col-12-sm">
          <InputFilled
            type="text"
            name="username"
            label="Username"
            value={this.props.username}
            handleChange={this.props.handleChange} />
        </div>
        <div className="UserList-adduser-inp-container col-12-sm">
          <InputFilled
            type="password"
            name="password"
            label="Password"
            value={this.props.password}
            handleChange={this.props.handleChange} />
        </div>
        <div className="UserList-adduser-inp-container col-12-sm">
          <InputFilled
            type="password"
            name="repassword"
            label="Re-type password"
            value={this.props.repassword}
            handleChange={this.props.handleChange} />
        </div>
        <div className="UserList-adduser-inp-container col-12-sm">
          <InputFilled
            type="text"
            name="email"
            label="Email"
            value={this.props.email}
            handleChange={this.props.handleChange} />
        </div>
        <div className="UserList-adduser-inp-container col-6-sm col-5-md">
          <div className="inp-filled-container">
            <label>
              <select value={this.props.role} name="role" onChange={this.props.handleChange} className="inp-filled">
                <option value="technician">Technician</option>
                <option value="member">Member</option>
              </select>
              <span className="inp-filled-label inp-has-content">Role</span>
            </label>
          </div>
        </div>
        <div className="UserList-adduser-inp-container col-6-sm col-7-md">
          <InputFilled
            type="date"
            name="expDate"
            label="Expiry date"
            value={this.props.expDate}
            handleChange={this.props.handleChange} />
        </div>
      </div>
    );
  }
}

export default UserListAdduserAccountSection;