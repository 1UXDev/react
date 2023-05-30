import Image from "next/image";
import styles from "./page.module.css";
import { data } from "./data";
import Artpieces from "./Components/Artpieces/Artpieces";
import Spotlight from "./Components/Spotlight/Spotlight";

export default function Home() {
  let randArt = null;
  async function spotLight() {
    return (randArt = Math.floor(Math.random() * data.length));
  }
  spotLight();

  return (
    <main className={styles.main}>
      <Spotlight
        image={data[randArt].imageSource}
        artist={data[randArt].artist}
      />
      <Artpieces pieces={data} />
    </main>
  );
}
