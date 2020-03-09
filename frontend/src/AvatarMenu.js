import React from 'react';

class AvatarMenu extends React.Component {
  render() {
  	return (
      <div>
        <button onClick={this.props.handleLogout} className="btn round-btn topbar-avatar">V</button>
      </div>
	 );
  }
}

export default AvatarMenu;