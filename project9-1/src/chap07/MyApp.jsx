import React, { useState } from 'react';
import MyComponent from './MyComponent';

function MyApp() {
  const [show, setShow] = useState(true);
  
  return (
    <div>
      <button onClick={() => setShow(false)}>Hide Component</button>
      {show && <MyComponent />}
    </div>
  );
}

export default MyApp;
