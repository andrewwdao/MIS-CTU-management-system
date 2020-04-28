import React from 'react';

import ListRow from './ListRow';

class ListView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      faculties: [
        {
          id: '1234567',
          name: 'This is Faculty',
          majors: [
            {
              id: '23423',
              name: 'Major name 1'
            }
          ],
        },
        {
          id: '4342563',
          name: 'Faculty field',
          majors: [
            {
              id: '23423',
              name: 'Major name 1'
            },
            {
              id: '23424',
              name: 'Major name 2'
            }
          ],
        },
        {
          id: '2345789',
          name: 'This is Faculty 2',
          majors: [
            {
              id: '23423',
              name: 'Major name 1'
            }
          ],
        }
      ]
    };

    this.getFacultyList = this.getFacultyList.bind(this);
  }

  componentDidMount() {
    // this.userListRefresher = setInterval(this.getFacultyList, 5000);
  }

  componentWillUnmount() {
    // clearInterval(this.userListRefresher);
  }

  // Make a request to get faculties list, then update the faculties list state
  getFacultyList() {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.props.accessToken
      },
    };

    fetch(this.props.host + 'users/', requestOptions).then(
      res =>{
        return res.json();
      }
    ).then(
      data => {
        console.log(data);
      }
    );
  }

  render() {
    const faculties = this.state.faculties.map(
      faculty => {

        // Need try block to avoid exception when faculty try to enter some regex (*, ?)
        try {

          // If the filter string is found
          const searchFilter = this.props.searchFilter.toLowerCase();
          if (faculty.id.toLowerCase().search(searchFilter) !== -1 || faculty.name.toLowerCase().search(searchFilter) !== -1)
            return (
              <ListRow
                key={faculty.id}
                faculty={faculty}
                updateSelectedFaculty={this.props.updateSelectedFaculty}
                />
            );
        } catch (e) {
          console.log(e);
        }

        return null;
      }
    );

    return(
      <div className="list-view">
        <div className="list-view-main-row">
          <div className="FacultyList list-view-header id">ID</div>
          <div className="FacultyList list-view-header faculty">Faculty</div>
          <div className="FacultyList list-view-header count">#Majors</div>
        </div>

        {faculties}
      </div>
    );
  }
}

export default ListView;