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

  function handleToggle(id) {
    setIsOn((prevIsOn) =>
      prevIsOn.map((item) =>
        item.id === id ? { ...item, isOn: !item.isOn } : item
      )
    );
    console.log(isOn);
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} lightDB={lightDB} handleToggle={handleToggle} />
    </Layout>
  );
}
