import React from "react";
import Welcome from "./Welcome";
function App(props){
return(
  <div><Welcome name="Mike"/>
  <Welcome name="Steve"/>
  <Welcome name="Jane"/>
  </div>
)
}
export default App;