import React from 'react';
import PropTypes from 'prop-types';


function BtnComponent({start, stop, reset, wait, status}) {
  return (
    <div>
      {(status === 0) ? <button onClick={start} className="stopwatch-btn stopwatch-btn-gre">Start</button> : "" }
      {(status === 1) ? 
       <div>
          <button onClick={stop} className="stopwatch-btn stopwatch-btn-red">Stop</button>
          <button onClick={wait}  className="stopwatch-btn stopwatch-btn-orange">Wait</button>
          <button onClick={reset} className="stopwatch-btn stopwatch-btn-yel">Reset</button>
        </div> : ""
       }
       {(status === 2) ? 
       <div>
          <button onClick={start} className="stopwatch-btn stopwatch-btn-gre">Start</button>
       </div> : ""
       }
      
    </div>
  );
}
BtnComponent.propTypes = {
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  wait: PropTypes.func.isRequired,
  status: PropTypes.number.isRequired
}
export default BtnComponent;