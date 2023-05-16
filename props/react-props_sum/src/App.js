import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <h1>I&apos;m a Calculator written in React!</h1>
      <br></br>
      <Sum valueA={3} valueB={15} />
    </div>
  );
}

function Sum({ valueA, valueB }) {
  return (
    <h3>
      {valueA} + {valueB} = {valueA + valueB}
    </h3>
  );
}
