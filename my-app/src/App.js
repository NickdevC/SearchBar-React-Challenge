import logo from './logo.svg';
import './App.css';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from "./components/StatefulGreeting";

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Nick" age="34" /> */}
      <StatefulGreeting />
    </div>
  );
}

export default App;
