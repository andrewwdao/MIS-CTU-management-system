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

      equipments: [],
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
          getDate: '09/08/2002',
          getTime: '08:22',
          returnDate: '09/08/2003',
          returnTime: '09:33',
          userId: '234234234',
          userName: 'Name name name',
          userStatus: '1',
          equipmentId: 'AB03421',
          equipmentName: 'This is equipment',
          deviceNumber: '1',
          getCondition: '2',
          getDescription: 'Good',
          returnCondition: '1',
          returnDescription: 'Normal',
        },
        {
          getDate: '09/08/2002',
          getTime: '08:23',
          returnDate: '09/08/2003',
          returnTime: '09:34',
          userId: '234eq4234',
          userName: 'Name2 name name',
          userStatus: '0',
          equipmentId: 'AB0342',
          equipmentName: 'This is equipment',
          deviceNumber: '1',
          getCondition: '2',
          getDescription: 'Good',
          returnCondition: '-1',
          returnDescription: "It's broken now",
        },
        {
          getDate: '09/08/2004',
          getTime: '08:25',
          returnDate: '09/08/2003',
          returnTime: '09:34',
          userId: '23sdfsd34',
          userName: 'Name name2 name',
          userStatus: '-1',
          equipmentId: 'AB0342',
          equipmentName: 'This is equipment',
          deviceNumber: '1',
          getCondition: '0',
          getDescription: 'Can not be used',
          returnCondition: '0',
          returnDescription: 'but someone used it',
        },
      ],

      selectedUser: {},
      selectedEquipment: {},
      selectedFaculty: {}
    };

    this.getDataList = this.getDataList.bind(this);

    this.updateDataLocally = this.updateDataLocally.bind(this);
  }

  componentDidMount() {
    // this.getFacultyList();
    this.getDataList('faculties', 'schools');
    this.getDataList('equipments', 'equipments');
  }

  getDataList(localFieldName, apiFieldName) {
    const refreshIcon = document.querySelectorAll(".top-refresh-icon")[0];

    if (refreshIcon)
      refreshIcon.classList.toggle('spin');

    const requestOptions = {
      method: 'GET',
      headers: {
        'Authorization': localStorage.getItem("accessToken"),
        'Content-Type': 'application/json',
      }
    };

    fetch(localStorage.getItem("apiHost") + "/" + apiFieldName + "/", requestOptions).then(
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
      // The data list contains data with just a few information
      dataList => {
        for (let i = 0; i < dataList.length; i++) {
          fetch(localStorage.getItem("apiHost") + '/'+ apiFieldName +'/' + dataList[i].id , requestOptions).then(
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
            // The data with all the information
            dataFull => {
              // Add the array index to update the current equipment locally when a new major is added
              // (update it locally to reduce network traffic)
              dataFull.arrayIndex = i;

              dataList[i] = dataFull;  

              this.setState({
                [localFieldName]: dataList
              });
            }
          );
        }

        if (refreshIcon)
          refreshIcon.classList.toggle('spin');
      }
    );
  }

  updateDataLocally(data) {
    // Call setState for subcomponents to update
    this.setState({
      [data]: this.state[data],
    });
  }

  render() {
    return (
      <View
        users={this.state.users}

        equipments={this.state.equipments}

        faculties={this.state.faculties}

        inOutHistories={this.state.inOutHistories}
        deviceHistories={this.state.deviceHistories}

        handleLogout={this.props.handleLogout}

        updateDataLocally={this.updateDataLocally}
        getDataList={this.getDataList}
        />
    );
  }
}

export default Data;