import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        onIncrement={() => setPeople(people + 1)}
        onDecrement={() => setPeople(people - 1)}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
