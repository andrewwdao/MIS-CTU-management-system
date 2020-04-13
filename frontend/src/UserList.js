import React from 'react';

import UserListAdduserModal from './UserListAdduserModal';

import imgPlaceholder from './UI/icons/photo.png';

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
          toggleModal={this.toggleAdduserModal}
          accessToken={this.props.accessToken} />

        <div className="UserList-top">
          <div className="UserList-top-search-section">
            <form>
              <input className="UserList-top-search-text-input" type="text" placeholder="Search" />
              <input type="submit" value="Search" />
              <svg onClick={this.toggleAdduserModal} tabIndex="0" className="UserList-top-search-button" viewBox="-1 0 136 136.21852"><g id="surface1"><path d="M 93.148438 80.832031 C 109.5 57.742188 104.03125 25.769531 80.941406 9.421875 C 57.851562 -6.925781 25.878906 -1.460938 9.53125 21.632812 C -6.816406 44.722656 -1.351562 76.691406 21.742188 93.039062 C 38.222656 104.707031 60.011719 105.605469 77.394531 95.339844 L 115.164062 132.882812 C 119.242188 137.175781 126.027344 137.347656 130.320312 133.269531 C 134.613281 129.195312 134.785156 122.410156 130.710938 118.117188 C 130.582031 117.980469 130.457031 117.855469 130.320312 117.726562 Z M 51.308594 84.332031 C 33.0625 84.335938 18.269531 69.554688 18.257812 51.308594 C 18.253906 33.0625 33.035156 18.269531 51.285156 18.261719 C 69.507812 18.253906 84.292969 33.011719 84.328125 51.234375 C 84.359375 69.484375 69.585938 84.300781 51.332031 84.332031 C 51.324219 84.332031 51.320312 84.332031 51.308594 84.332031 Z M 51.308594 84.332031 " /></g></svg>
            </form>
          </div>
          <div className="UserList-top-filter-section">
            <div className="UserList-top-filter-switch">
              <div className="UserList-top-filter-switch-half">
                LAB
              </div>
              <div className="UserList-top-filter-switch-slider">
              </div>
              <div className="UserList-top-filter-switch-half">
                ALL
              </div>
            </div>
          </div>
        </div>

        <div className="UserList-body">
          <div className="UserList-detail-info-container">
            <div className="UserList-detail-info-picture-container">
              <img className="UserList-detail-info-picture" src={imgPlaceholder} />
            </div>
            
            <div className="UserList-detail-info center">
              <div className="UserList-detail-info-label">
                ID:
              </div>
              <div className="UserList-detail-info-content">
                ____________
              </div>
            </div>
            <div className="UserList-detail-info center">
              <div className="UserList-detail-info-label">
                Name:
              </div>
              <div className="UserList-detail-info-content">
                ___________________
              </div>
            </div>
            <div className="UserList-detail-info center">
              <div className="UserList-detail-info-label">
                DOB:
              </div>
              <div className="UserList-detail-info-content">
                ________________
              </div>
            </div>
            <div className="UserList-detail-info center">
              <div className="UserList-detail-info-label">
                Phone:
              </div>
              <div className="UserList-detail-info-content">
                ________________
              </div>
            </div>
            <div className="UserList-detail-info center">
              <div className="UserList-detail-info-label">
                Major:
              </div>
              <div className="UserList-detail-info-content">
                _____________________
              </div>
            </div>
            <div className="UserList-detail-info center">
              <div className="UserList-detail-info-label">
                Faculty:
              </div>
              <div className="UserList-detail-info-content">
                ________________
              </div>
            </div>

            <div className="UserList-inlab-data-expansion detail">
              <div className="UserList-inlab-data-expansion-header">
                Currently using
              </div>
              <div className="UserList-inlab-data-expansion-body">
                <div className="UserList-inlab-data-expansion-item detail">
                  <div className="UserList-inlab-data-expansion-cell id">
                    WH0001
                  </div>
                  <div className="UserList-inlab-data-expansion-cell">
                    Hand drill
                  </div>
                  <div className="UserList-inlab-data-expansion-cell">
                    09:42 AM
                  </div>
                  <div className="UserList-inlab-data-expansion-cell action">
                    Return
                  </div>
                </div>
                <div className="UserList-inlab-data-expansion-item detail">
                  <div className="UserList-inlab-data-expansion-cell id">
                    WH0001
                  </div>
                  <div className="UserList-inlab-data-expansion-cell">
                    Hand drill
                  </div>
                  <div className="UserList-inlab-data-expansion-cell">
                    09:42 AM
                  </div>
                  <div className="UserList-inlab-data-expansion-cell action">
                    Return
                  </div>
                </div>
                <div className="UserList-inlab-data-expansion-item detail">
                  <input className="UserList-inlab-data-expansion-txt-inp" placeholder="Add by ID" />
                  <button className="UserList-inlab-data-expansion-btn">Check</button>
                </div>
              </div>
            </div>
            
          </div>
          <div className="UserList-inlab-users-list">
            <div className="UserList-list-main-row">
              <div className="UserList-list-header id">ID</div>
              <div className="UserList-list-header name">Name</div>
              <div className="UserList-list-header major">Major</div>
              <div className="UserList-list-header faculty">Faculty</div>
            </div>
            <div className="UserList-list-main-row">
              <div className="UserList-list-data id">B123456</div>
              <div className="UserList-list-data name">Just A Name</div>
              <div className="UserList-list-data major">Just major</div>
              <div className="UserList-list-data faculty">This is Faculty</div>

              <div className="UserList-inlab-data-expansion">
                <div className="UserList-inlab-data-expansion-header">
                  Currently using
                </div>
                <div className="UserList-inlab-data-expansion-body">
                  <div className="UserList-inlab-data-expansion-item">
                    <div className="UserList-inlab-data-expansion-cell id">
                      WH0001
                    </div>
                    <div className="UserList-inlab-data-expansion-cell">
                      Hand drill
                    </div>
                    <div className="UserList-inlab-data-expansion-cell">
                      09:42 AM
                    </div>
                    <div className="UserList-inlab-data-expansion-cell action">
                      Return
                    </div>
                  </div>
                  <div className="UserList-inlab-data-expansion-item">
                    <div className="UserList-inlab-data-expansion-cell id">
                      WH0001
                    </div>
                    <div className="UserList-inlab-data-expansion-cell">
                      Hand drill
                    </div>
                    <div className="UserList-inlab-data-expansion-cell">
                      09:42 AM
                    </div>
                    <div className="UserList-inlab-data-expansion-cell action">
                      Return
                    </div>
                  </div>
                  <div className="UserList-inlab-data-expansion-item">
                    <input className="UserList-inlab-data-expansion-txt-inp" placeholder="Add by ID" />
                    <button className="UserList-inlab-data-expansion-btn">Check</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="UserList-list-main-row">
              <div className="UserList-list-data id">B123456</div>
              <div className="UserList-list-data name">Just A Name</div>
              <div className="UserList-list-data major">Just major</div>
              <div className="UserList-list-data faculty">This is Faculty</div>
            </div>
            <div className="UserList-list-main-row">
              <div className="UserList-list-data id">B123456</div>
              <div className="UserList-list-data name">Just A Name</div>
              <div className="UserList-list-data major">Just major</div>
              <div className="UserList-list-data faculty">This is Faculty</div>
            </div>
          </div>
        </div>

        {/* OLD DESIGN
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
        */}
      </div>
    );
  }
}

export default UserList;