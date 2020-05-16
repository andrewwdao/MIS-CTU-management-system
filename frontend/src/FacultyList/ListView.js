import React from 'react';

import ListRow from './ListRow';

class ListView extends React.Component {
  render() {
    let faculties = [];
    // Run this only if there are faculties
    // Sometime this.props.faculties.map() fail (not a function, don't know why, undefined maybe?)
    // so this check is needed
    if (this.props.faculties) {
      faculties = this.props.faculties.map(
        faculty => {
          // Need try block to avoid exception when faculty try to enter some regex (*, ?)
          try {

            // If the filter string is found
            const searchFilter = this.props.searchFilter.toLowerCase();
            if (faculty.school_id.toLowerCase().search(searchFilter) !== -1 || faculty.school_name.toLowerCase().search(searchFilter) !== -1)
              return (
                <ListRow
                  key={faculty.id}
                  faculty={faculty}
                  updateSelectedFaculty={this.props.updateSelectedFaculty}
                  updateFacultyByArrayIndex={this.props.updateFacultyByArrayIndex}
                  toggleDetailPannelModal={this.props.toggleDetailPannelModal}
                  />
              );
          } catch (e) {
            console.log(e);
          }

          return null;
        }
      );
    }
    

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