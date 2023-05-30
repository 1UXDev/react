//import { useState } from "react";
import { getD6Roll } from "../../utils";
import D6 from "../D6";
import "./D6Button.css";

export function D6Button({ rolls, setRolls }) {
  // rolls & setRolls braucht man jetzt nicht mehr als props mit diesem Ansatz
  //const [rolls, setRolls] = useState([]);

  const handleRoll = () => {
    setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  };

  const currentRollValue = rolls[0]?.value;

  return (
    <button className="d6-button" type="button" onClick={handleRoll}>
      <D6 value={currentRollValue} />
    </button>
  );
}

// Version A

// //import { useState } from "react";
// import { getD6Roll } from "../../utils";
// import D6 from "../D6";
// import "./D6Button.css";

// export function D6Button({ value, onRoll }) {
//   // rolls & setRolls braucht man jetzt nicht mehr als props mit diesem Ansatz
//   //const [rolls, setRolls] = useState([]);

//   // const handleRoll = () => {
//   //   setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
//   // };

//   //const currentRollValue = rolls[0]?.value;

//   return (
//     <button className="d6-button" type="button" onClick={onRoll}>
//       <D6 value={value} />
//     </button>
//   );
// }
