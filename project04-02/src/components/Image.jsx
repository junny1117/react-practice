import React from 'react';
import littlePrince from '../littlePrince.jpg';

function Image() {
  return (
    <div>
      <img
        src={littlePrince}
        style={{ width: "300px", margin: "10px" }}
        alt="littlePrince"
      />
    </div>
  );
}

export default Image;
