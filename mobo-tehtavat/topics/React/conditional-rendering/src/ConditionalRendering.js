import React from "react";

export default function ConditionalRend({ text }) {
  if (text.length < 6) {
    return <div>{text}</div>;
  } else {
    return <div>Too long</div>;
  }
}
