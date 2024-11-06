import logo from './logo.svg';
import './App.css';

function App() {
  let display = "off";
  return (
    <div className="App">
      {display === "on" ? (
        <div>
          <h1>아메리카노</h1>
          <p className="pStyle">3000원</p> 
          <button>버튼</button>
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
