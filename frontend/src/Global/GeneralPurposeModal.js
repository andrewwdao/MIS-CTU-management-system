import React from 'react';

class GeneralPurposeModal extends React.Component {
  render() {
    return (
      <div className={this.props.active ? 'show' : ''}>
        <div onClick={this.props.toggle} className="GeneralPurposeModal modal-background"></div>
        <div className="GeneralPurposeModal modal-container">
          <button onClick={this.props.toggle} className="modal-close-btn">✖</button>
          <div className="modal-header">{this.props.header}</div>
          <div className="modal-body">
            <div className="modal-message">
              {this.props.message}
            </div>
          </div>
          <div className="modal-footer">
            {this.props.cancel &&
              <button onClick={this.props.toggle} className="GeneralPurposeModal btn cancel"> CANCEL </button>}
            {this.props.ok &&
              <button onClick={this.props.okClick} className="GeneralPurposeModal btn info"> {this.props.ok} </button>}
            {this.props.warning &&
              <button onClick={this.props.warningClick} className="GeneralPurposeModal btn warning"> {this.props.warning} </button>}
            {this.props.delete &&
              <button onClick={this.props.deleteClick} className="GeneralPurposeModal btn caution"> {this.props.delete} </button>}
          </div>
        </div>
      </div>
    );
  }
}

export default GeneralPurposeModal;