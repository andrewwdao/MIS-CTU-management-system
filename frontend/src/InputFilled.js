import React from 'react';

class InputFilled extends React.Component {
  render() {
    return (
      <div className="inp-filled-container">
        <label>
          <input
            className="inp-filled"
            type={this.props.type}
            name={this.props.name}
            onChange={this.props.handleChange}
            value={this.props.value} />
          <span
            className={`inp-filled-label ${(this.props.type !== "text" && this.props.type !== "password" && this.props.type !== "number") || this.props.value ? "inp-has-content" : null}`}>
            {this.props.label}
          </span>
        </label>
      </div>
    );
  }
}

export default InputFilled;