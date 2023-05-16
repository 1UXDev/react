import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>My Heading</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odit
        saepe laudantium, assumenda sequi praesentium excepturi, autem
        repellendus aspernatur exercitationem, voluptatibus reprehenderit nulla
        quibusdam nihil. Esse accusantium expedita explicabo nulla?
      </p>
    </article>
  );
}
