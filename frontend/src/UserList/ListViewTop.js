import React from 'react';

import AdduserModal from './AdduserModal';
import InlabFilterSwitch from './InlabFilterSwitch';

class ListViewTop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      adduserModalActive: false,  // Whether or not the create user modal should show
    }

    this.toggleAdduserModal = this.toggleAdduserModal.bind(this);
  }

  // Show/hide the create user modal
  toggleAdduserModal(e) {
    this.setState({
      adduserModalActive: !this.state.adduserModalActive
    });
  }

  render() {
    return(
      <div>
        <AdduserModal
          modalActive={this.state.adduserModalActive}
          toggleModal={this.toggleAdduserModal}
          accessToken={this.props.accessToken} />

        <button onClick={this.toggleAdduserModal} className="list-body-create-btn">Create</button>

        <InlabFilterSwitch
          toggleInlabFilter={this.props.toggleInlabFilter}
          inlabFilter={this.props.inlabFilter}
          />
      </div>
    );
  }
}

export default ListViewTop;