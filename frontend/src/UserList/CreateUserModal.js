import React from 'react';

import CreateUserForm from './CreateUserForm';

class CreateUserModal extends React.Component {
  render() {
    return (
      <div className={`UserList-create-user-modal ${this.props.modalActive ? 'show' : ''}`}>
        <div onClick={this.props.toggleModal} className="modal-background">
        </div>
        <div className="modal-container UserList-modal-container">
          <button onClick={this.props.toggleModal} className="modal-close-btn">✖</button>
          <div className="modal-header">Add</div>
            <div className="modal-body UserList-create-user-modal-body">
              <CreateUserForm
                accessToken={this.props.accessToken} />
            </div>
        </div>
      </div>
    );
  }
}


export default CreateUserModal;