import React from 'react';

import DataExpansion from './DataExpansion';

class ListRow extends React.Component {
  constructor(props) {
    super(props);

    this.updateSelectedFaculty = this.updateSelectedFaculty.bind(this);
  }

  // Show/hide the currently using equipments section
  toggleFacultyDataExpansion(e) {
    if (e.target.classList[0] === 'list-view-main-row')
      e.target.classList.toggle('active');
  }

  // Need this to pass the current faculty to the function in props
  // This is a good way to pass parameters from sub component to main component
  // REMEMBER TO FIX THIS EVERYTIME THE faculty INFO GET UPDATED
  updateSelectedFaculty() {
    this.props.updateSelectedFaculty(this.props.faculty);
  }

	render() {
		return (
      <div onClick={this.toggleFacultyDataExpansion} className="list-view-main-row" tabIndex="0">
        <div className="FacultyList list-view-data id" onClick={this.updateSelectedFaculty}>{this.props.faculty.id}</div>
        <div className="FacultyList list-view-data faculty">{this.props.faculty.name}</div>
        <div className="FacultyList list-view-data count">{this.props.faculty.majors.length}</div>

        <DataExpansion
          majors={this.props.faculty.majors}
          detail='' />
      </div>
		);
	}
}

export default ListRow;