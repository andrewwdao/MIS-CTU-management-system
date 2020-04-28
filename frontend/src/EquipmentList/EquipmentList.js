import React from 'react';

import Top from './Top';
import Body from './Body';

class FacultyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inlabFilter: true,  // Show inlab equipments only or all equipments flag
      searchFilter: ''        // Filter equipments by their IDs
    };

    this.toggleInlabFilter = this.toggleInlabFilter.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  // Change the state to show inlab equipments only or all equipments
  toggleInlabFilter(e) {
    this.setState({
      inlabFilter: !this.state.inlabFilter
    });
  }

  // Filter the equipments based on their IDs, also control the text appear on search bar
  // !! Should add filter by name feature !!
  handleFilterChange(e) {
    e.preventDefault();

    this.setState({
      searchFilter: e.target.value
    });
  }

  render() {
    return (
      <div className="main">
        <Top
          toggleInlabFilter={this.toggleInlabFilter}
          inlabFilter={this.state.inlabFilter}
          searchFilter={this.state.searchFilter}
          handleFilterChange={this.handleFilterChange}
          />

        <Body
          accessToken={this.props.accessToken}
          host={this.props.host}
          inlabFilter={this.state.inlabFilter}
          searchFilter={this.state.searchFilter}
          />
      </div>
    );
  }
}

export default FacultyList;