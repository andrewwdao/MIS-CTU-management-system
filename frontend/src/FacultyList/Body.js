import React from 'react';

import DetailPannel from './DetailPannel';
import ListView from './ListView';

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFaculty: {}  // Currently selected faculty to show on the detail pannel
    };

    this.selectFaculty = this.selectFaculty.bind(this);
  }

  // Change the info on DetailPannel based on the Faculty got passed to
  // REMEMBER TO FIX THIS EVERYTIME THE FACULTY INFO GET UPDATED
  selectFaculty(Faculty) {
    this.setState({
      selectedFaculty: Faculty
    });
  }

  render() {
    return(
      <div className="body">
        <DetailPannel
          selectedFaculty={this.state.selectedFaculty} />
        <ListView
          accessToken={this.props.accessToken}
          host={this.props.host}
          selectFaculty={this.selectFaculty}
          searchFilter={this.props.searchFilter}
          />
      </div>
    );
  }
}

export default Body;