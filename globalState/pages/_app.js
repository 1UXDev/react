import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const lightDB = [
    { id: 1, name: "Cats", isOn: false },
    { id: 2, name: "Dogs", isOn: false },
    { id: 3, name: "Mouses", isOn: false },
  ];

  const [isOn, setIsOn] = useState(lightDB);

  function onToggle(id) {
    lightDB.map((light) => (id === light.id ? (light.isOn = true) : light));
  }

  return (
    <Layout lightDB={lightDB}>
      <GlobalStyle />
      <Component {...pageProps} lightDB={lightDB} onToggle={onToggle} />
    </Layout>
  );
}
