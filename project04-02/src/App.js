import Menu from "./components/Menu";
import MenuOff from "./components/MenuOff"
function App() {
  let display = 'on'
return (
  <div className="App">
    {
    display==='on'?<Menu/> : <MenuOff/>}
</div>
);
}

export default App;