import React from 'react';
import History from './History';

const HistoryComponent = () => {

  return(
    <div className="history-component">
      <div className="history-content">
        <div className="content-header">
          <h2 className="title">HISTORY</h2>
        </div>

        <div className="content-body">
          <History />
        </div>
      </div>
    </div>
  );
}

export default HistoryComponent;