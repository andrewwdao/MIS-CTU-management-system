import React from 'react';

import CreateUserPersonalSection from './CreateUserPersonalSection';
import CreateUserAccountSection from './CreateUserAccountSection';
import GeneralPurposeModal from '../Global/GeneralPurposeModal';

import imgBtn from '../images/image.png';

class CreateUserForm extends React.Component {

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
      // faculty: '',
      major: '',

      organization: '',
      identityCard: '',

      errorModalMessage: '',
      errorModalActive: false,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.toggleErrorModal = this.toggleErrorModal.bind(this);
  }

  componentDidMount() {
    const user = this.props.user;
    if (user) {
      this.setState({
        username: user.username,
        password: '',
        repassword: '',
        email: user.email,
        expDate: '',

        avatar: imgBtn,
        firstName: user.first_name,
        lastName: user.last_name,
        dob: user.birth_date,
        gender: user.gender,
        phone: user.phonenumber,

        workPlace: user.student_info ? 'ctu' : '',

        studentID: user.student_info ? user.student_info.student_id : '',
        classID: '',
        major: user.student_info ? user.student_info.major : '',

        organization: user.extra_info ? user.extra_info.workplace : '',
        identityCard: user.extra_info ? user.extra_info.identity_id : '',
      });
    }
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

  toggleErrorModal() {
    this.setState({
      errorModalActive: !this.state.errorModalActive
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    
    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': localStorage.getItem("accessToken"),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        role: this.state.role, //Number(this.state.role),
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        birth_date: this.state.dob,
        phonenumber: this.state.phone[0] === '+' ? this.state.phone : "+84" + this.state.phone.slice(1), // 0xxxxxxxxx -> +84xxxxxxxxx
        gender: this.state.gender,
        avatar: null, //this.state.avatar,
        student_info: {
          student_id: this.state.studentID,
          class_id: this.state.classID,
          major: this.state.major,
          // school: this.state.faculty
        },
        extra_info: {
          identity_card: this.state.identityCard,
          workplace: this.state.workPlace !== 'ctu' ? this.props.organization : 'Can Tho University', // Set default workplace for CTU
        }
      })
    };

    fetch(localStorage.getItem("apiHost") + '/users/', requestOptions).then(
      res => res.json()
    ).then(
      data => {
        for (let key in data) {
          for (let subKey in data[key]) {
            console.log((subKey !== "0" ? subKey : key) + " " + data[key][subKey]);
          }
        }
      }
    );
  }

  render() {
    return (
      <div>
        <form className="UserList-create-user-form" onSubmit={this.handleFormSubmit}>
          <CreateUserAccountSection
            avatar={this.state.avatar}
            username={this.state.username}
            password={this.state.password}
            repassword={this.state.repassword}
            email={this.state.email}
            role={this.state.role}
            expDate={this.state.expDate}
            handleChange={this.handleInputChange} />

          <CreateUserPersonalSection
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            dob={this.state.dob}
            gender={this.state.gender}
            phone={this.state.phone}
            workPlace={this.state.workPlace}
            studentID={this.state.studentID}
            classID={this.state.classID}
            // faculty={this.state.faculty}
            major={this.state.major}
            organization={this.state.organization}
            identityCard={this.state.identityCard}

            accessToken={this.props.accessToken}

            handleChange={this.handleInputChange} />

          <div className="UserList-create-user-btn-group">
            <input
              className="btn UserList-create-user-modal-btn"
              type="submit"
              value="Add"
              onClick={this.handleFormSubmit} />
          </div>
        </form>
      </div>
    );
  }

}

export default CreateUserForm;