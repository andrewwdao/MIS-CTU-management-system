import React from 'react';

import UserListAdduserModal from './UserListAdduserModal';

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      adduserModalActive: false,
    }

    this.toggleAdduserModal = this.toggleAdduserModal.bind(this);
  }

  toggleAdduserModal(e) {
    this.setState({
      adduserModalActive: !this.state.adduserModalActive
    });
  }

  render() {
    return (
      <div className="main">
        <UserListAdduserModal
          modalActive={this.state.adduserModalActive}
          toggleModal={this.toggleAdduserModal} />
        <div className="UserList-controlbar">
          <div className="UserList-controlbar-row">
            <div className="txt-inp-container col-9-sm col-10-md col-11-lg">
              <input placeholder="Search..." className="txt-inp UserList-search-txt-inp" />
              <span className="focus-bot"></span>
            </div>
            <div className="col-3-sm col-2-md col-1-lg UserList-adduser-btn-container">
              <button onClick={this.toggleAdduserModal} className="btn UserList-adduser-btn">
                <span className="UserList-adduser-icon">+</span> Add
              </button>
            </div>
          </div>
          <div className="UserList-controlbar-row">
            <div className="col-6-sm col-5-md col-3-lg">
              <select className="UserList-search-filter">
                <option>All users</option>
                <option>In lab</option>
                <option>Valid</option>
              </select>
              <select className="UserList-search-filter">
                <option>All fields</option>
                <option>ID</option>
                <option>Name</option>
              </select>
            </div>
            <div className="UserList-viewfilter-container">
              <label className="checkbox-label">Label
                <input type="checkbox" className="default-checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div>
          <div className="UserList-info-container">
            <table className="UserList-info-table">
              <thead className="UserList-info-row">
                <tr>
                  <th className="UserList-info-header">ID</th>
                  <th className="UserList-info-header">Name</th>
                  <th className="UserList-info-header">Major</th>
                  <th className="UserList-info-header">Year</th>
                  <th className="UserList-info-header">Expiry date</th>
                  <th className="UserList-info-header">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="UserList-info-row">
                  <td className="UserList-info-data">1</td>
                  <td className="UserList-info-data">Ha Ha Ha</td>
                  <td className="UserList-info-data">Major</td>
                  <td className="UserList-info-data">2</td>
                  <td className="UserList-info-data">22-02-2222</td>
                  <td className="UserList-info-data">
                    <span className="UserList-action">Check in</span>
                  </td>
                </tr>
                <tr className="UserList-info-row">
                  <td className="UserList-info-data">1</td>
                  <td className="UserList-info-data">Ha Ha Ha</td>
                  <td className="UserList-info-data">Major</td>
                  <td className="UserList-info-data">2</td>
                  <td className="UserList-info-data">22-02-2222</td>
                  <td className="UserList-info-data">
                    <span className="UserList-action">Check in</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default UserList;