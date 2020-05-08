import React from 'react';

import ListView from './ListView';

class Body extends React.Component {
  render() {
    return(
      <div className="body">
        <ListView
          searchFilter={this.props.searchFilter}
          inOutHistories={this.props.inOutHistories}
          />
      </div>
    );
  }
}

export default Body;