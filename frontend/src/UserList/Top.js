import React from 'react';

import CreateUserModal from './CreateUserModal';

class Top extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      createUserModalActive: false,  // Whether or not the create user modal should show
    }

    this.toggleCreateUserModal = this.toggleCreateUserModal.bind(this);
  }

  // Show/hide the create user modal
  toggleCreateUserModal(e) {
    this.setState({
      createUserModalActive: !this.state.createUserModalActive
    });
  }

  render() {
    return (
      <div>
        <CreateUserModal
          modalActive={this.state.createUserModalActive}
          toggleModal={this.toggleCreateUserModal}
          accessToken={this.props.accessToken} />

        <div className="top">
          <div className="top-search-section">
            <form>
              <input
                className="top-search-text-input"
                type="text"
                placeholder="Search"
                value={this.props.searchFilter}
                onChange={this.props.handleFilterChange}
                />
              <input type="submit" value="Search" />
              <svg tabIndex="0" className="top-search-button" viewBox="-1 0 136 136.21852"><g id="surface1"><path d="M 93.148438 80.832031 C 109.5 57.742188 104.03125 25.769531 80.941406 9.421875 C 57.851562 -6.925781 25.878906 -1.460938 9.53125 21.632812 C -6.816406 44.722656 -1.351562 76.691406 21.742188 93.039062 C 38.222656 104.707031 60.011719 105.605469 77.394531 95.339844 L 115.164062 132.882812 C 119.242188 137.175781 126.027344 137.347656 130.320312 133.269531 C 134.613281 129.195312 134.785156 122.410156 130.710938 118.117188 C 130.582031 117.980469 130.457031 117.855469 130.320312 117.726562 Z M 51.308594 84.332031 C 33.0625 84.335938 18.269531 69.554688 18.257812 51.308594 C 18.253906 33.0625 33.035156 18.269531 51.285156 18.261719 C 69.507812 18.253906 84.292969 33.011719 84.328125 51.234375 C 84.359375 69.484375 69.585938 84.300781 51.332031 84.332031 C 51.324219 84.332031 51.320312 84.332031 51.308594 84.332031 Z M 51.308594 84.332031 " /></g></svg>
            </form>
          </div>
          <div className="top-options-section">
            <div
              className={'top-filter-switch' + (this.props.inlabFilter ? '' : ' active')}
              onClick={this.props.toggleInlabFilter}>
              <div className="top-filter-switch-half">
                ALL
              </div>
              <div className="top-filter-switch-slider">
              </div>
              <div className="top-filter-switch-half">
                LAB
              </div>
            </div>
            <div className="UserList top-header mobile-only">Users</div>
            <button onClick={this.toggleCreateUserModal} className="top-create-btn">Create</button>
            <svg className="top-refresh-icon" viewBox="0 0 512 512"><path d="m61.496094 279.609375c-.988282-8.234375-1.496094-16.414063-1.496094-23.609375 0-107.402344 88.597656-196 196-196 50.097656 0 97 20.199219 131.5 51.699219l-17.300781 17.601562c-3.898438 3.898438-5.398438 9.597657-3.898438 15 1.800781 5.097657 6 9 11.398438 10.199219 3.019531.605469 102.214843 32.570312 95.898437 31.300781 8.035156 2.675781 19.917969-5.894531 17.703125-17.699219-.609375-3.023437-22.570312-113.214843-21.300781-106.902343-1.199219-5.398438-5.101562-9.898438-10.5-11.398438-5.097656-1.5-10.800781 0-14.699219 3.898438l-14.699219 14.398437c-45.300781-42.296875-107.503906-68.097656-174.101562-68.097656-140.699219 0-256 115.300781-256 256v.597656c0 8.457032.386719 14.992188.835938 19.992188.597656 6.625 5.480468 12.050781 12.003906 13.359375l30.816406 6.160156c10.03125 2.007813 19.050781-6.402344 17.839844-16.5zm0 0"/><path d="m499.25 222.027344-30.90625-6.296875c-10.042969-2.046875-19.125 6.371093-17.890625 16.515625 1.070313 8.753906 1.546875 17.265625 1.546875 23.753906 0 107.398438-88.597656 196-196 196-50.097656 0-97-20.199219-131.5-52l17.300781-17.300781c3.898438-3.898438 5.398438-9.597657 3.898438-15-1.800781-5.101563-6-9-11.398438-10.199219-3.019531-.609375-102.214843-32.570312-95.898437-31.300781-5.101563-.898438-10.203125.601562-13.5 4.199219-3.601563 3.300781-5.101563 8.699218-4.203125 13.5.609375 3.019531 22.574219 112.210937 21.304687 105.898437 1.195313 5.402344 5.097656 9.902344 10.496094 11.398437 6.261719 1.570313 11.488281-.328124 14.699219-3.898437l14.402343-14.398437c45.296876 42.300781 107.5 69.101562 174.398438 69.101562 140.699219 0 256-115.300781 256-256v-.902344c0-6.648437-.242188-13.175781-.796875-19.664062-.570313-6.628906-5.433594-12.074219-11.953125-13.40625zm0 0"/></svg>
          </div>
        </div>
      </div>
    );
  }
}

export default Top;