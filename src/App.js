import './App.css';
import Weather from "./Weather"

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a href="https://github.com/raemeenen/react-weather-app" target="_blank" rel="noreferrer" >Open-source code</a> by <a href="https://visionary-lily-770552.netlify.app/" target="_blank" rel="noreferrer" >Rachel Meenen</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
