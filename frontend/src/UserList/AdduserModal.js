import React from 'react';

import AdduserForm from './AdduserForm';

class AdduserModal extends React.Component {
  render() {
    return (
      <div className={`UserList-adduser-modal ${this.props.modalActive ? 'active' : null}`}>
        <div onClick={this.props.toggleModal} className="modal-background">
        </div>
        <div className="modal-container UserList-modal-container">
          <button onClick={this.props.toggleModal} className="modal-close-btn">✖</button>
          <div className="modal-header">Add</div>
            <div className="modal-body UserList-adduser-modal-body">
              <AdduserForm
                accessToken={this.props.accessToken} />
            </div>
        </div>
      </div>
    );
  }
}


export default AdduserModal;