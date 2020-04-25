import React from 'react';

import ListRow from './ListRow';

class ListView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      faculties: [
        {
          id: '1234567',
          faculty: 'This is Faculty',
        },
        {
          id: '4342563',
          faculty: 'Faculty field',
        },
        {
          id: '2345789',
          faculty: 'This is Faculty 2',
        },
        {
          id: '4252523',
          faculty: 'Faculty 1',
        },
        {
          id: '0000000',
          faculty: 'Faculty 2',
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

            // if the inlabFilter gets true, only return faculties with their status is 1 (true == 1)
            // (true == 1 is true but true == -1 or true == 2 is false)
            // OR if the inlabFilter gets false, return all faculties
            if (this.props.inlabFilter == faculty.status || !this.props.inlabFilter)
              return (
                <ListRow
                  key={faculty.id}
                  faculty={faculty}
                  selectFaculty={this.props.selectFaculty}
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
          <div className="FacultyList list-view-header major-count">#Majors</div>
        </div>

        {faculties}
      </div>
    );
  }
}

export default ListView;