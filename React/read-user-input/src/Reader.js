import React from "react";

export default function Reader() {
  const [first, setFirst] = React.useState("");
  const [last, setLast] = React.useState("");

  return (
    <div style={{}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "150px",
          margin: "auto",
        }}
      >
        <input
          value={first}
          placeholder="Enter firstname"
          onChange={(e) => {
            setFirst(e.target.value);
          }}
        />

        <input
          value={last}
          placeholder="Enter lastname"
          onChange={(e) => {
            setLast(e.target.value);
          }}
        />

        <button
          onClick={() => {
            alert(`${first} ${last}`);
          }}
        >
          Show
        </button>
      </div>
    </div>
  );
}
