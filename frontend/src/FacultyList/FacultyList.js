import React from 'react';

import Top from './Top';
import Body from './Body';

class FacultyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFilter: ''        // Filter users by their IDs
    };

    this.toggleInlabFilter = this.toggleInlabFilter.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  // Change the state to show inlab users only or all users
  toggleInlabFilter(e) {
    this.setState({
      inlabFilter: !this.state.inlabFilter
    });
  }

  // Filter the users based on their IDs, also control the text appear on search bar
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
          searchFilter={this.state.searchFilter}
          handleFilterChange={this.handleFilterChange}
          />

        <Body
          accessToken={this.props.accessToken}
          host={this.props.host}
          searchFilter={this.state.searchFilter}
          />
      </div>
    );
  }
}

export default FacultyList;