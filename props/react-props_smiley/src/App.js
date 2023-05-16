import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy={true} />;
}

function Smiley({ isHappy }) {
  return isHappy == true ? <h1>😊</h1> : <h1>😒</h1>;
}
