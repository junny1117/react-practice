import logo from './logo.svg';
import './App.css';

function App() {
  let display = "off";
  const pStyle = {backgroundColor: 'yellow', color: 'green'};
  return (

    <div className="App">
      {display === "on" ? (
        <div>
          <h1>아메리카노</h1>
          <p style={pStyle}>3000원</p> 
        </div>
      ) : (
        <>
          <h1>아메리카노</h1>
          <p className="pStyle">준비중입니다.</p>
        </>
      )}
    </div>
  );
}

export default App;
