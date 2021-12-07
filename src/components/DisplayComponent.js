import React from 'react';
import PropTypes from 'prop-types';


function DisplayComponent({time: {hours, minutes, seconds}}) {
  return (
    <div >
       <span>{(hours >= 10) ? hours : "0" + hours}</span>&nbsp;:&nbsp;
       <span>{(minutes >= 10) ? minutes : "0" + minutes}</span>&nbsp;:&nbsp;
       <span>{(seconds >= 10) ? seconds : "0" + seconds}</span>&nbsp;&nbsp;
    </div>
  );
}
DisplayComponent.propTypes = {
  time: PropTypes.object.isRequired
}

export default DisplayComponent;