import React from 'react';

import DataExpansionRow from './DataExpansionRow';

class DataExpansion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': localStorage.getItem("accessToken"),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        school: this.props.facultyServerId,
        major_id: this.state.id,
        major_name: this.state.name
      })
    };

    fetch(localStorage.getItem("apiHost") + /majors/, requestOptions).then(
      res => {
        if (res.status === 401) {
          console.log("No permission.");
          return '';
        }
        else if (res.status !== 201) {
          console.log(res.status + " Unexpected error.");
          return '';
        }
        else {
          console.log("Success");
          return res.json();
        }
      }
    );
  }

	render() {
    let rows = 0;
    console.log(this.props.majors);
    if (this.props.majors) {
        var dataExpansionRows = this.props.majors.map(major => {
        rows++;
        return (
          <DataExpansionRow
            detail={this.props.detail}
            key={major.id}
            major={major}
            />
        )
      });
    }

    return(
      <div className={'data-expansion ' + this.props.detail}>
        <div className="data-expansion-header">
          Majors: {rows}
        </div>
        <div className="data-expansion-body">

          {dataExpansionRows}

          <form className={'data-expansion-row bottom-row ' + this.props.detail} onSubmit={this.handleFormSubmit}>
            <input
              className="FacultyList data-expansion-txt-inp id"
              name="id"
              value={this.state.id}
              onChange={this.handleInputChange}
              placeholder="ID"
              />
            <input
              className="FacultyList data-expansion-txt-inp name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="Name"
              />
            <button className="FacultyList data-expansion-btn">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default DataExpansion;