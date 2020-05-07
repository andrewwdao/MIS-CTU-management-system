import React from 'react';

import DetailPannel from './DetailPannel';
import ListView from './ListView';

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFaculty: {},  // Currently selected faculty to show on the detail pannel
      detailPannelModalActive: false,
    };

    this.updateSelectedFaculty = this.updateSelectedFaculty.bind(this);
    this.toggleDetailPannelModal = this.toggleDetailPannelModal.bind(this);
  }

  // Change the info on DetailPannel based on the Faculty got passed to
  // REMEMBER TO FIX THIS EVERYTIME THE FACULTY INFO GET UPDATED
  updateSelectedFaculty(Faculty) {
    this.setState({
      selectedFaculty: Faculty
    });
  }

  toggleDetailPannelModal() {
    this.setState({
      detailPannelModalActive: !this.state.detailPannelModalActive
    });
  }

  render() {
    return(
      <div className="body">
        <DetailPannel
          selectedFaculty={this.state.selectedFaculty}
          modalActive={this.state.detailPannelModalActive}
          toggleModal={this.toggleDetailPannelModal}
          updateFacultyByArrayIndex={this.props.updateFacultyByArrayIndex}
          />
        <ListView
          faculties={this.props.faculties}
          updateSelectedFaculty={this.updateSelectedFaculty}
          searchFilter={this.props.searchFilter}
          toggleDetailPannelModal={this.toggleDetailPannelModal}
          getFacultyList={this.props.getFacultyList}
          updateFacultyByArrayIndex={this.props.updateFacultyByArrayIndex}
          />
      </div>
    );
  }
}

export default Body;