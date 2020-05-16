import React from 'react';

import GeneralPurposeModal from '../Global/GeneralPurposeModal';

class DataExpansionRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalActive: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.removeMajor = this.removeMajor.bind(this);
  }

  toggleModal() {
    this.setState({
      modalActive: !this.state.modalActive
    });
  }


  // Remove major from current faculty, then update the whole faculty (locally)
  removeMajor() {
    this.props.removeMajor(this.props.major);
    this.toggleModal();
  }

	render() {
    return(
      <div>
        <GeneralPurposeModal
          active={this.state.modalActive}
          toggle={this.toggleModal}
          header={"Deleting " + this.props.major.major_name}
          message={"Do you really wish to delete " + this.props.major.major_name + " (" + this.props.major.major_id + ")"}
          delete="DELETE"
          deleteClick={this.removeMajor}
          cancel={true}
          />

        <div className={'data-expansion-row ' + this.props.detail}>
          <div className="FacultyList data-expansion-cell id">
            {this.props.major.major_id}
          </div>
          <div className="FacultyList data-expansion-cell">
            {this.props.major.major_name}
          </div>
          <div onClick={this.toggleModal} className="FacultyList data-expansion-cell action">
            Remove
          </div>
        </div>
      </div>
    );
  }
}

export default DataExpansionRow;