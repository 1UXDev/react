import "./Card.css";

export default function Card({ fruit, key }) {
  return (
    <p className="card" key={fruit.id} style={{ backgroundColor: fruit.color }}>
      {fruit.name} {key}
    </p>
  );
}
