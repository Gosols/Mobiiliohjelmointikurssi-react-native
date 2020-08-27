import React from "react";
import RepoList from "./RepoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Repositories</h1>
      <ul>
        <RepoList />
      </ul>
    </div>
  );
}

export default App;
