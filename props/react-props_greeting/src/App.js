import "./styles.css";
//import Greeting from "./Greeting";

export default function App() {
  return (
    <div>
      <Greeting name={"Alex"} role={"Player"} />
      <Greeting name={"Thoralf"} role={"Coach"} />
      <Greeting name={"Paul"} role={"Player"} />
    </div>
  );
}

function Greeting({ name, role }) {
  return (
    <div>
      {role === "Coach" ? <h1>Hi Coach {name}</h1> : <h1>Hello {name}</h1>}
    </div>
  );
}
