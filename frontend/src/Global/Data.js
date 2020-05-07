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
          timeIn: '09:28 AM',
          status: 1,
          equipments: [
            {
              id: 'WH0001',
              name: 'Hand drill drill drill drill drill drill drill drill drill drill drill',
              time: '09:42 AM',
            },
            {
              id: 'WH0002',
              name: 'Hand drill 2',
              time: '09:42 AM',
            },
            {
              id: 'WH0003',
              name: 'Hand drill 2',
              time: '09:42 AM',
            },
            {
              id: 'WH0004',
              name: 'Hand drill 2',
              time: '09:42 AM',
            },
            {
              id: 'WH0006',
              name: 'Hand drill 2',
              time: '09:42 AM',
            },
            {
              id: 'WH0007',
              name: 'Hand drill 2',
              time: '09:42 AM',
            },
            {
              id: 'WH0008',
              name: 'Hand drill 2',
              time: '09:42 AM',
            }
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
          timeIn: '09:28 AM',
          status: 1,
          equipments: [
            {
              id: 'WH0001',
              name: 'Hand drill',
              time: '09:42 AM',
            },
            {
              id: 'WH0002',
              name: 'Hand drill 2',
              time: '09:42 AM',
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
        {
          id: '00032000',
          name: 'Expired Name',
          major: 'Major',
          timeIn: '',
          status: -1,
          equipments: []
        },
        {
          id: '004000',
          name: 'Expired Name',
          major: 'Major',
          timeIn: '',
          status: -1,
          equipments: []
        },
        {
          id: '0000140',
          name: 'Expired Name',
          major: 'Major',
          timeIn: '',
          status: -1,
          equipments: []
        },
        {
          id: '00032000',
          name: 'Expired Name',
          major: 'Major',
          timeIn: '',
          status: -1,
          equipments: []
        },
        {
          id: '001230000',
          name: 'Expired Name',
          major: 'Major',
          timeIn: '',
          status: -1,
          equipments: []
        },
        {
          id: '000004100',
          name: 'Expired Name',
          major: 'Major',
          timeIn: '',
          status: -1,
          equipments: []
        },
        {
          id: '00055000',
          name: 'Expired Name',
          major: 'Major',
          timeIn: '',
          status: -1,
          equipments: []
        },
        {
          id: '00033000',
          name: 'Expired Name',
          major: 'Major',
          timeIn: '',
          status: -1,
          equipments: []
        }
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

      selectedUser: {},
      selectedEquipment: {},
      selectedFaculty: {}
    };

    this.getFacultyList = this.getFacultyList.bind(this);
  }

  componentDidMount() {
    this.getFacultyList();
  }

  getFacultyList() {
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
      data => {

        for (let i = 0; i < data.length; i++) {
          fetch(localStorage.getItem("apiHost") + '/schools/' + data[i].id , requestOptions).then(
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
            data2 => {
              data[i] = data2;
            }
          );
        }

        this.setState({
          faculties: data
        });
      }
    );
  }

  render() {
    return (
      <View
        users={this.state.users}
        equipments={this.state.equipments}
        faculties={this.state.faculties}
        accessToken={this.props.accessToken}
        />
    );
  }
}

export default Data;