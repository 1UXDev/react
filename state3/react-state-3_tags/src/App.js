import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(newTag) {
    const newTags = [...tags];
    newTags.push(newTag);
    setTags(newTags);
    console.log(tags[0]);
    // Short Version
    // setTags([...tags], newTag)
  }

  function handleDeleteTag(deleteMe) {
    const delTags = tags.filter((tag) => {
      return tag !== deleteMe;
    });
    setTags(delTags);
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
