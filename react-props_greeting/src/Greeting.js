export function Greeting(props) {
  return (
    <div>
      {props.name === "Coach" ? <h1>Hi Coach</h1> : <h1>Hello {props.name}</h1>}
    </div>
  );
}
