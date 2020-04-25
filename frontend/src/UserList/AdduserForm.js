import React from 'react';

import AdduserPersonalSection from './AdduserPersonalSection';
import AdduserAccountSection from './AdduserAccountSection';

import imgBtn from '../UI/icons/image.png';

class AdduserForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      repassword: '',
      email: '',
      role: '4',
      expDate: '',

      avatar: imgBtn,
      firstName: '',
      lastName: '',
      dob: '',
      gender: "M",
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
              avatar: [reader.result]
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
    
    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + this.props.accessToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        role: this.state.role,
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        birth_date: this.state.dob,
        phonenumber: this.state.phone,
        gender: this.state.gender,
        avatar: this.state.avatar,
        student_info: {
          student_id: this.state.studentID,
          class_id: this.state.classID,
          major: this.state.major,
          school: this.state.faculty
        },
        extra_info: {
          identity_card: this.state.identityCard,
          workplace: this.state.organization
        }
      })
    };

    fetch('http://127.0.0.1:8000/users/', requestOptions).then(
      res => res.json()
    ).then(
      data => console.log(data)
    );

  }

  render() {
    return (
      <form method="POST" className="UserList-adduser-form" onSubmit={this.handleFormSubmit}>
        <AdduserAccountSection
          avatar={this.state.avatar}
          username={this.state.username}
          password={this.state.password}
          repassword={this.state.repassword}
          email={this.state.email}
          role={this.state.role}
          expDate={this.state.expDate}
          handleChange={this.handleInputChange} />

        <AdduserPersonalSection
          firstName={this.state.firstName}
          lastName={this.state.lastName}
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

          accessToken={this.props.accessToken}

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

export default AdduserForm;