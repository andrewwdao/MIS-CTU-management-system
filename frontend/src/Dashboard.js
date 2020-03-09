import React from 'react';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="main">
        <div id="topbar" className="topbar">
        </div>
        <div className="Dashboard-content">
          <div className="Dashboard-card-container col-12-sm col-6-md col-6-lg">
            <div className="Dashboard-card">
              <div className="Dashboard-card-header">
                <div className="Dashboard-card-title">
                  IN LAB
                </div>
              </div>
            </div>
          </div>
          <div className="Dashboard-card-container col-12-sm col-6-md col-6-lg">
            <div className="Dashboard-card">
            </div>
          </div>
          <div className="Dashboard-card-container col-12-sm col-6-md col-6-lg">
            <div className="Dashboard-card">
            </div>
          </div>
          <div className="Dashboard-card-container col-12-sm col-6-md col-6-lg">
            <div className="Dashboard-card">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;