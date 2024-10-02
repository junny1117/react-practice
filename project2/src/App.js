import logo from './logo.svg';
import './App.css';

function App() {
  let display = "off";
  return (
    <div className="App">
      {display === "on" ? (
          <>
            <h1>아메리카노</h1>
            <p style={{ backgroundColor: 'yellow', color: 'green' }}>3000원</p>
          </>
      ) : (
        <>
          <h1>아메리카노</h1>
          <p style={{ backgroundColor: 'yellow', color: 'green' }}>준비중입니다.</p>
        </>
      )}
    </div>
  );
}

export default App;
