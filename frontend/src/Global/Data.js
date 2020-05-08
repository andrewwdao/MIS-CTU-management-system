import React from 'react';

import View from './View';

class Data extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Users
      users: [
        {
          id: '1234567',
          name: 'Name Có Dấu',
          major: 'Major',
          timeIn: '09:28',
          status: 1,
          equipments: [
            {
              id: 'WH0001',
              name: 'Hand drill drill drill drill drill drill drill drill drill drill drill',
              time: '09:42',
            },
            {
              id: 'WH0002',
              name: 'Hand drill 2',
              time: '09:42',
            },
            {
              id: 'WH0003',
              name: 'Hand drill 2',
              time: '09:42',
            },
            {
              id: 'WH0004',
              name: 'Hand drill 2',
              time: '09:42',
            },
          ]
        },
        {
          id: '4342563',
          name: 'Just BCD',
          major: 'Just major',
          timeIn: '',
          status: 0,
          equipments: []
        },
        {
          id: '2345789',
          name: 'Just DEF Name',
          major: 'Just major',
          timeIn: '09:28',
          status: 1,
          equipments: [
            {
              id: 'WH0001',
              name: 'Hand drill',
              time: '09:42',
            },
            {
              id: 'WH0002',
              name: 'Hand drill 2',
              time: '09:42',
            }
          ]
        },
        {
          id: '4252523',
          name: 'Haha Name',
          major: 'Major',
          timeIn: '',
          status: 0,
          equipments: []
        },
        {
          id: '0000000',
          name: 'Expired Name',
          major: 'Major',
          timeIn: '',
          status: -1,
          equipments: []
        },
        {
          id: '0000002',
          name: 'Expired Name',
          major: 'Major',
          timeIn: '',
          status: -1,
          equipments: []
        },
      ],

      equipments: [
        {
          id: '1234567',
          name: 'This is Equipment',
          description: "Description goes here, very long long long long long long long long long long long long long",
          equipmentSelfs: [
            {
              id: '1',
              condition: 2,
              conditionDescription: 'Good',
              status: 0,
              usingBy: ''
            },
            {
              id: '2',
              condition: 1,
              conditionDescription: 'Normal',
              status: 1,
              usingBy: '1234'
            },
            {
              id: '3',
              condition: 0,
              conditionDescription: "Can not be used",
              status: 0,
              usingBy: ''
            },
            {
              id: '4',
              condition: -1,
              conditionDescription: "Severe",
              status: 0,
              usingBy: ''
            }
          ],
        },
        {
          id: '4342563',
          name: 'Equipment field',
          equipmentSelfs: [
            {
              id: '1',
              condition: -1,
              conditionDescription: 'Severe',
              status: 0,
              usingBy: ''
            },
            {
              id: '2',
              condition: 0,
              conditionDescription: "Can not be used, for real, this is not a reason just a test text",
              status: 0,
              usingBy: ''
            }
          ],
        },
        {
          id: '2345789',
          name: 'This is Equipment 2',
          equipmentSelfs: [
            {
              id: '1',
              condition: 1,
              conditionDescription: 'Good',
              status: 1,
              usingBy: '14224'
            },
            {
              id: '2',
              condition: 0,
              conditionDescription: "Can not be used",
              status: 0,
              usingBy: ''
            }
          ],
        }
      ],
      faculties: [],

      inOutHistories: [
        {
          date: '09/09/2009',
          time: '09:42',
          user: {
            id: '2342342123234',
            name: 'Another Name',
          }
        },
        {
          date: '09/09/2009',
          time: '09:43',
          user: {
            id: '234234234',
            name: 'Another Name 2',
          }
        },
        {
          date: '09/09/2009',
          time: '09:44',
          user: {
            id: '234234234',
            name: 'Another Name 3',
          }
        },
      ],

      deviceHistories: [
        {
          date: '09/08/2002',
          time: '08:22',
        }
      ],

      selectedUser: {},
      selectedEquipment: {},
      selectedFaculty: {}
    };

    this.getFacultyList = this.getFacultyList.bind(this);
    this.updateFacultyByArrayIndex = this.updateFacultyByArrayIndex.bind(this);
  }

  componentDidMount() {
    this.getFacultyList();
  }

  // Update (add/remove major) or add new faculty locally based on index
  updateFacultyByArrayIndex(faculty, flag) {
    let newFacultiesList = this.state.faculties;

    // Create new faculty
    if (flag === 1) {
      faculty.arrayIndex = this.state.faculties.length;
      newFacultiesList.push(faculty);
    } else if (flag === -1) {  // Delete
      newFacultiesList.splice(faculty.arrayIndex, 1);
    } else {  // Update existed faculty with new major
      newFacultiesList[faculty.arrayIndex] = faculty;
    }

    this.setState({
      faculties: newFacultiesList,
    });
  }

  getFacultyList() {
    const refreshIcon = document.querySelectorAll(".FacultyList.top-refresh-icon")[0];

    if (refreshIcon)
      refreshIcon.classList.toggle('spin');

    const requestOptions = {
      method: 'GET',
      headers: {
        'Authorization': localStorage.getItem("accessToken"),
        'Content-Type': 'application/json',
      }
    };

    fetch(localStorage.getItem("apiHost") + /schools/, requestOptions).then(
      res => {
        if (res.status === 401) {
          console.log("No permission.");
          return '';
        } else if (res.status !== 200) {
          console.log(res.status + " Unexpected error.");
          return '';
        } else {
          return res.json();
        }
      }
    ).then(
      // This faculty has no majors list
      faculty => {
        for (let i = 0; i < faculty.length; i++) {
          fetch(localStorage.getItem("apiHost") + '/schools/' + faculty[i].id , requestOptions).then(
            res => {
              if (res.status === 401) {
                console.log("No permission.");
                return '';
              } else if (res.status !== 200) {
                console.log(res.status + " Unexpected error.");
                return '';
              } else {
                return res.json();
              }
            }
          ).then(
            // Majors list included
            fullFaculty => {
              // Add the array index to update the current faculty locally when a new major is added
              // (update it locally to reduce network traffic)
              fullFaculty.arrayIndex = i;

              faculty[i] = fullFaculty;  

              this.setState({
                faculties: faculty
              });
            }
          );
        }

        if (refreshIcon)
          refreshIcon.classList.toggle('spin');
      }
    );
  }

  render() {
    return (
      <View
        users={this.state.users}

        equipments={this.state.equipments}

        faculties={this.state.faculties}
        updateFacultyByArrayIndex={this.updateFacultyByArrayIndex}
        getFacultyList={this.getFacultyList}

        inOutHistories={this.state.inOutHistories}

        handleLogout={this.props.handleLogout}
        />
    );
  }
}

export default Data;