import Link from "../components/Link";
import Lights from "../components/Lights";

export default function Rooms({ lights, toggleLight, lightDB }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>All Lights</h1>
      <Lights lightDB={lightDB} lights={lights} toggleLight={toggleLight} />
    </>
  );
}
