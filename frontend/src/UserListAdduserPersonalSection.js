import React from 'react';

import InputFilled from './InputFilled';

class UserListAdduserPersonalSection extends React.Component {
  render() {
    var studentInfoSection = (
      <div>
        <div className="UserList-adduser-inp-container col-12-sm">
          <InputFilled
            type="text"
            name="studentID"
            label="Student ID"
            value={this.props.studentID}
            handleChange={this.props.handleChange} />
        </div>
        <div className="UserList-adduser-inp-container col-12-sm">
          <InputFilled
              type="text"
              name="classID"
              label="Class ID"
              value={this.props.classID}
              handleChange={this.props.handleChange} />
        </div>
        <div className="UserList-adduser-inp-container col-12-sm">
          <div className="inp-filled-container">
            <label>
              <select value={this.props.faculty} name="faculty" onChange={this.props.handleChange} className="inp-filled">
                <option value="faculty">-- Faculty --</option>
              </select>
              <span className="inp-filled-label inp-has-content">Faculty</span>
            </label>
          </div>
        </div>
        <div className="UserList-adduser-inp-container col-12-sm">
          <div className="inp-filled-container">
            <label>
              <select value={this.props.major} name="major" onChange={this.props.handleChange} className="inp-filled">
                <option value="major">-- Major --</option>
              </select>
              <span className="inp-filled-label inp-has-content">Major</span>
            </label>
          </div>
        </div>
      </div>
    );

    var otherInfoSection = (
      <div className="col-12-sm">
        <div className="UserList-adduser-inp-container col-12-sm">
          <InputFilled
            type="text"
            name="organization"
            label="Organization"
            value={this.props.organization}
            handleChange={this.props.handleChange} />
        </div>
        <div className="UserList-adduser-inp-container col-12-sm">
          <InputFilled
            type="number"
            name="identityCard"
            label="Identity Card number"
            value={this.props.identityCard}
            handleChange={this.props.handleChange} />
        </div>
      </div>
    );

    return (
      <div className="col-12-sm col-6-md UserList-adduser-section">
        <div className="UserList-adduser-section-title">
          Personal information
        </div>
        <div className="UserList-adduser-inp-container col-12-sm">
          <InputFilled
            type="text"
            name="name"
            label="Fullname"
            value={this.props.name}
            handleChange={this.props.handleChange} />
        </div>
        <div className="UserList-adduser-inp-container col-8-sm">
          <InputFilled
            type="date"
            name="dob"
            label="Date of birth"
            value={this.props.dob}
            handleChange={this.props.handleChange} />
        </div>
        <div className="UserList-adduser-inp-container col-4-sm">
          <div className="inp-filled-container">
            <label>
              <select value={this.props.gender} name="gender" onChange={this.props.handleChange} className="inp-filled">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <span className="inp-filled-label inp-has-content">Gender</span>
            </label>
          </div>
        </div>
        <div className="UserList-adduser-inp-container col-12-sm">
          <InputFilled
            type="number"
            name="phone"
            label="Phone number"
            value={this.props.phone}
            handleChange={this.props.handleChange} />
        </div>
        <div className="UserList-adduser-inp-container col-12-sm">
          <div className="inp-filled-container">
            <label>
              <select value={this.props.workPlace} name="workPlace" onChange={this.props.handleChange} className="inp-filled">
                <option value="ctu">Can Tho University</option>
                <option value="other">Other</option>
              </select>
              <span className="inp-filled-label inp-has-content">Work place</span>
            </label>
          </div>
        </div>
        {this.props.workPlace === "ctu" ? studentInfoSection : otherInfoSection }
      </div>
    );
  }
}

export default UserListAdduserPersonalSection;