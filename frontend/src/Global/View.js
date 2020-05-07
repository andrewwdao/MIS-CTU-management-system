import React from 'react';

import '../css/Nav.css';
import '../css/ListView.css';
import '../css/UserList.css';
import '../css/EquipmentList.css';
import '../css/FacultyList.css';

import Nav from './Nav';
import UserList from '../UserList/UserList';
import EquipmentList from '../EquipmentList/EquipmentList';
import FacultyList from '../FacultyList/FacultyList';

class View extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedView: 'Users',

      inlabFilter: true,  // Show inlab only or all flag
      searchFilter: '',        // Filter by IDs/Names

      navActive: false,
    };

    this.updateSelectedView = this.updateSelectedView.bind(this);

    this.toggleInlabFilter = this.toggleInlabFilter.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);

    this.toggleNav = this.toggleNav.bind(this);
  }

  updateSelectedView(event) {
    this.setState({
      selectedView: event.currentTarget.querySelector('.Nav-item-label').innerHTML
    });

    // Toggle to hide the navbar in case user on mobile (desktop view has no effect)
    this.toggleNav()
  }

  // Change the state to show inlab only or all
  toggleInlabFilter(e) {
    this.setState({
      inlabFilter: !this.state.inlabFilter
    });
  }

  // Filter the based on IDs/Names, also control the text appear on search bar
  handleFilterChange(e) {
    e.preventDefault();
    this.setState({
      searchFilter: e.target.value
    });
  }

  // Show/hide navbar on mobile view
  toggleNav() {
    this.setState({
      navActive: !this.state.navActive
    });
  }

	render() {
    const views = {
      'Users': (
        <UserList
          accessToken={this.props.accessToken}
          host={this.props.host}
          users={this.props.users}
          toggleInlabFilter={this.toggleInlabFilter}
          inlabFilter={this.state.inlabFilter}
          searchFilter={this.state.searchFilter}
          handleFilterChange={this.handleFilterChange}/>
      ),
      'Faculties': (
        <FacultyList
          accessToken={this.props.accessToken}
          host={this.props.host}
          faculties={this.props.faculties}
          searchFilter={this.state.searchFilter}
          handleFilterChange={this.handleFilterChange}
          />
      ),
      'Equipments': (
        <EquipmentList
          accessToken={this.props.accessToken}
          host={this.props.host}
          equipments={this.props.equipments}
          toggleInlabFilter={this.toggleInlabFilter}
          inlabFilter={this.state.inlabFilter}
          searchFilter={this.state.searchFilter}
          handleFilterChange={this.handleFilterChange}
          />
      ),
    }

    return(
      <div>
        {views[this.state.selectedView]}
        <Nav
          selectedView={this.state.selectedView}
          updateSelectedView={this.updateSelectedView}
          toggleNav={this.toggleNav}
          active={this.state.navActive}
          />
      </div>
    );
  }
}

export default View;