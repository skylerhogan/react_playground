import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Page } from "./page/Page";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Page />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      </div>
  );
}

export default App;
