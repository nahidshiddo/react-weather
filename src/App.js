import logo from './logo.svg';
import './App.css';
import Weather from "./Weather"
import Loader from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <h1>Weather App</h1>
      <Weather city ="Paris" />
      
      </header>

        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
        />

    </div>
  );
}

export default App;
