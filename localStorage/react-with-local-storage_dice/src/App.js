import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./styles.css";
import useLocalStorageState from "use-local-storage-state";
import { useEffect, useState } from "react";
import { getD6Roll } from "./utils";

export default function App() {
  //const [rolls, setRolls] = useState([]);
  const [rolls, setRolls] = useLocalStorageState("diceRoll", {
    defaultValue: [],
  });

  useEffect(() => {
    localStorage.setItem("diceRoll", JSON.stringify(rolls));
  }, [rolls]);
  //const [rolls, setRolls] = useLocalStorageState("LastRolls", []);
  return (
    <div className="app">
      <main className="app__main">
        <D6Button rolls={rolls} setRolls={setRolls} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}

// Version A

// import { D6Button } from "./components/D6Button";
// import History from "./components/History";
// import "./styles.css";
// import useLocalStorageState from "use-local-storage-state";
// import { useEffect, useState } from "react";
// import { getD6Roll } from "./utils";

// export default function App() {
//   //const [rolls, setRolls] = useState([]);
//   const [rolls, setRolls] = useLocalStorageState("diceRoll", {
//     defaultValue: [],
//   });

//   useEffect(() => {
//     localStorage.setItem("diceRoll", JSON.stringify(rolls));
//   }, [rolls]);
//   //const [rolls, setRolls] = useLocalStorageState("LastRolls", []);
//   return (
//     <div className="app">
//       <main className="app__main">
//         <D6Button
//           // rolls={rolls}
//           // setRolls={setRolls}
//           value={rolls[0]?.value}
//           onRoll={() => {
//             setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
//           }}
//         />
//       </main>
//       <aside className="app__aside">
//         <History rolls={rolls} />
//       </aside>
//     </div>
//   );
// }
