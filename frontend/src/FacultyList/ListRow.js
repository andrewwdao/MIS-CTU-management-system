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
  updateSelectedFaculty() {
    this.props.updateSelectedFaculty(this.props.faculty);
    this.props.toggleDetailPannelModal();
  }

	render() {
		return (
      <div onClick={this.toggleFacultyDataExpansion} className="list-view-main-row" tabIndex="0">
        <div className="FacultyList list-view-data id" onClick={this.updateSelectedFaculty}>{this.props.faculty.school_id}</div>
        <div className="FacultyList list-view-data faculty">{this.props.faculty.school_name}</div>
        <div className="FacultyList list-view-data count">{this.props.faculty.majors && this.props.faculty.majors.length}</div>

        <DataExpansion
          faculty={this.props.faculty}
          updateFacultyByArrayIndex={this.props.updateFacultyByArrayIndex}
          detail='' />
      </div>
		);
	}
}

export default ListRow;