import "./StatusCheck.css";
import { useState, useEffect } from "react";

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

export default function StatusCheck() {
  const [statusIcon, setStatusIcon] = useState("⁉️");
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    if (myData === "Ok") {
      setStatusIcon("✅");
      console.log("--- ✅ daten sind ok --- ");
    } else if (myData == []) {
      setStatusIcon("⏳");
    } else {
      setStatusIcon("❌");
      console.log("--- ❌ daten sind nicht ok --- ");
    }
    console.log("Server says: ", myData);
  }, [myData]);

  async function handleCheckApiStatus() {
    setMyData([]);
    try {
      const dataObj = await fetch(apiStatusUrl);
      const data = await dataObj.json();
      setMyData(data.status);
    } catch (e) {
      console.log("Error", e);
    }
  }

  return (
    <article className="status-check">
      <div className="status-check__wrapper">
        <h2 className="status-check__heading">Status:</h2>
        <span className="status-check__icon">{statusIcon}</span>
      </div>
      <button
        type="button"
        className="status-check__button"
        onClick={handleCheckApiStatus}
      >
        Check API Status
      </button>
    </article>
  );
}
