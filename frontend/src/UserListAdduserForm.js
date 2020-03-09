import React from 'react';

import UserListAdduserPersonalSection from './UserListAdduserPersonalSection';
import UserListAdduserAccountSection from './UserListAdduserAccountSection';

import imgBtn from './UI/icons/image.png';

class UserListAdduserForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      repassword: '',
      email: '',
      role: 'member',
      expDate: '',

      imgSrc: imgBtn,
      name: '',
      dob: '',
      gender: "male",
      phone: '',

      workPlace: 'ctu',

      studentID: '',
      classID: '',
      faculty: '',
      major: '',

      organization: '',
      identityCard: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

    handleInputChange(e) {
      if (e.target.type === "file") {
        var file = e.target.files[0];

        if (file && file.type.match('image.*')) {
          var reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onloadend = function(e) {
            this.setState({
              imgSrc: [reader.result]
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
    console.log(e);
  }

  render() {
    return (
      <form className="UserList-adduser-form" onSubmit={this.handleFormSubmit}>
        <UserListAdduserAccountSection
          imgSrc={this.state.imgSrc}
          username={this.state.username}
          password={this.state.password}
          repassword={this.state.repassword}
          email={this.state.email}
          role={this.state.role}
          expDate={this.state.expDate}
          handleChange={this.handleInputChange} />

        <UserListAdduserPersonalSection
          name={this.state.name}
          dob={this.state.dob}
          gender={this.state.gender}
          phone={this.state.phone}
          workPlace={this.state.workPlace}
          studentID={this.state.studentID}
          classID={this.state.classID}
          faculty={this.state.faculty}
          major={this.state.major}
          organization={this.state.organization}
          identityCard={this.state.identityCard}
          handleChange={this.handleInputChange} />

        <div className="UserList-adduser-btn-group">
          <input
            className="btn UserList-adduser-modal-btn"
            type="submit"
            value="Add"
            onClick={this.handleFormSubmit} />
        </div>
      </form>
    );
  }

}

export default UserListAdduserForm;