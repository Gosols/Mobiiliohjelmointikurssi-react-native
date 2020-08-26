import React from "react";
import ConditionalRend from "./ConditionalRendering";
import "./App.css";

function App() {
  const [text, setText] = React.useState("Test");

  return (
    <div className="App">
      <input
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <ConditionalRend text={text} />
    </div>
  );
}

export default App;
