import "./Tag.css";

export default function Tag({ tag, id }) {
  console.log(id, { id });
  return (
    <li className="tag" key={id}>
      {tag}
    </li>
  );
}
