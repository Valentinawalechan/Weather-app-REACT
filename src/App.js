import './App.css';
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App">
      <div className="container">
       <Weather defaultCity="London"/>
      <footer>
        This project was coded by Valentina Di Santo and is 
      <a href="https://github.com/Valentinawalechan/Weather-app-REACT" target="_blank" rel="noreferrer"> open-sourced on GitHub </a>
    </footer>
    </div>
    </div>

  );
}

