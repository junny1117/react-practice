import logo from './logo.svg';
import './App.css';

function App() {
  let name = "홍길동";
  return (
    <div className="App">
      <h1>Hello, React!!!</h1>
      <a href="http://www.naver.com">naver</a>
      <p><input defaultValue={name}></input></p>
      <div>
        {name === '홍길동' ? (
          <>
            <h1>{name}님과 함께하는 즐거운 리엑트 수업</h1>
            <h2>너무 재밌어요</h2>
          </>
        ) : (
          <h1>{name}님과 함께했던 힘든 리엑트!!</h1>
        )}
      </div>
    </div>
  );
}

export default App;
