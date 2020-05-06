import React from 'react';

import ListRow from './ListRow';

class ListView extends React.Component {
  render() {
    const faculties = this.props.faculties.map(
      rFaculty => {
        // convert faculty got from response to faculty in my style
        const faculty = {
          serverId: rFaculty.id,
          id: rFaculty.school_id,
          name: rFaculty.school_name,
          majors: rFaculty.majors,
        }

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
                toggleDetailPannelModal={this.props.toggleDetailPannelModal}
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