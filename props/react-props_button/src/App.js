import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Button
        color={"red"}
        disabled={true}
        text={"back"}
        onClick={handleClick}
      />
      <Button
        color={"blue"}
        disabled={false}
        text={"submit"}
        onClick={handleClick}
      />
    </div>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

function handleClick() {
  alert("Clicky Click");
}

/* 

export default function App() {
  return (
    <div>
      <Button
        color={"red"}
        disabled={true}
        text={"back"}
        onClick={handleClick()}
      />
      <Button color={"blue"} disabled={false} text={"submit"} />
    </div>
  );
}

function Button({ color, disabled, text }) {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={() => console.log("You clicked me!")}
    >
      {text}
    </button>
  );
}

function handleClick() {
  alert("Clicky Click");
}
 */
