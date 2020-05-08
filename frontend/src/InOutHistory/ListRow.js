import React from 'react';

class ListRow extends React.Component {
	render() {
		return (
      <div className="list-view-main-row" tabIndex="0">
        <div className="InOutHistory list-view-data date">{this.props.date}</div>
        <div className="InOutHistory list-view-data time">{this.props.time}</div>
        <div className="InOutHistory list-view-data user-id">{this.props.user.id}</div>
        <div className="InOutHistory list-view-data user-name">{this.props.user.name}</div>
      </div>
		);
	}
}

export default ListRow;