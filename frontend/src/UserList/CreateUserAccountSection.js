import React from 'react';

import InputFilled from '../Global/InputFilled';
import PhotoInput from './PhotoInput';

class CreateUserAccountSection extends React.Component {
  render() {
    return (
      <div className="col-12-sm col-6-md UserList-create-user-section">
        <div className="UserList-create-user-section-title">
          Account information
        </div>
        <div className="UserList-create-user-inp-container col-12-sm">
          {/*=========================================================
                   WARNING : THIS FEATURE IS NOT YET FINISHED
            ==========================================================*/}
          <PhotoInput
            handleChange={this.props.handleChange}
            img={this.props.avatar} />
        </div>
        <div className="UserList-create-user-inp-container col-12-sm">
          <InputFilled
            type="text"
            name="username"
            label="Username"
            value={this.props.username}
            handleChange={this.props.handleChange} />
        </div>
        <div className="UserList-create-user-inp-container col-12-sm">
          <InputFilled
            type="password"
            name="password"
            label="Password"
            value={this.props.password}
            handleChange={this.props.handleChange} />
        </div>
        <div className="UserList-create-user-inp-container col-12-sm">
          <InputFilled
            type="password"
            name="repassword"
            label="Re-type password"
            value={this.props.repassword}
            handleChange={this.props.handleChange} />
        </div>
        <div className="UserList-create-user-inp-container col-12-sm">
          <InputFilled
            type="text"
            name="email"
            label="Email"
            value={this.props.email}
            handleChange={this.props.handleChange} />
        </div>
        <div className="UserList-create-user-inp-container col-6-sm col-5-md">
          <div className="inp-filled-container">
            <label>
              <select value={this.props.role} name="role" onChange={this.props.handleChange} className="inp-filled">
                <option value="3">Technician</option>
                <option value="4">Member</option>
              </select>
              <span className="inp-filled-label inp-has-content">Role</span>
            </label>
          </div>
        </div>
        <div className="UserList-create-user-inp-container col-6-sm col-7-md">
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

export default CreateUserAccountSection;