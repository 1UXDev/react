import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Hello</Button>
      <Button>Button </Button>
      <Button>What is </Button>
      <Button> up</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
