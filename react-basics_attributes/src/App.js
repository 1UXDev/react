import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <MyArticle name="Peter" location="Brazil" />
      <MyArticle name="Jana" location="Spain" />
      <MyArticle name="Svön" location="Sweden" />
    </div>
  );
}

function MyArticle(props) {
  return (
    <div>
      <article>
        <h2>Hi, I am {props.name}</h2>
        <p>I am from {props.location}</p>
      </article>
      <hr></hr>
    </div>
  );
}
