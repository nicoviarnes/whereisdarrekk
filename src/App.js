import React from "react";
import "./App.css";

function App() {
  const today = new Date();
  const dDay = new Date("March 30, 2019 12:00:00");
  const res = Math.abs(today - dDay) / 1000;
  const days = Math.floor(res / 86400);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Have You Seen This Man?</h1>
        <p>
          It's been <span id="days">{days}</span> days since we've played video
          games with our friend Darrekk :(
        </p>
        <img src="/darrekk.jpg" width="50%" alt="darrekk" />
        <br/><br/>
      </header>
    </div>
  );
}

export default App;
