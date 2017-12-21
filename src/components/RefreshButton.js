import React from 'react';

const refreshButton = (props) => {
  return  (
    <button 
      type="button" 
      style={{float:"right"}} 
      className="btn btn-default" 
      aria-label="Left Align"
      onClick={props.onRefreshClick} >
      <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
      Refresh
    </button>
  );
};

export default refreshButton;
