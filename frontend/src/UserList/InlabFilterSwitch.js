import React from 'react';

class Top extends React.Component {
  render() {
    return(
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
    );
  }
}

export default Top;