import React from 'react';

import CreateFacultyForm from './CreateFacultyForm';

class CreateFacultyModal extends React.Component {
  render() {
    return (
      <div className={`FacultyList-create-faculty-modal ${this.props.modalActive ? 'active' : ''}`}>
        <div onClick={this.props.toggleModal} className="modal-background">
        </div>
        <div className="modal-container FacultyList-modal-container">
          <button onClick={this.props.toggleModal} className="modal-close-btn">✖</button>
          <div className="modal-header">Create</div>
            <div className="modal-body FacultyList-create-faculty-modal-body">
              <CreateFacultyForm
                accessToken={this.props.accessToken} />
            </div>
        </div>
      </div>
    );
  }
}


export default CreateFacultyModal;