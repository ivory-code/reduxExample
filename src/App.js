import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import { RecoilCounter } from "./components/RecoilCounter";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Study Redux</p>
        <div className="wrapper">
          <Counter />
          <RecoilCounter />
        </div>
      </div>
    </div>
  );
}

export default App;
