import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 42,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 987,
      name: "🍇 Grape",
      color: "purple",
    },
    {
      id: 567,
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: 789,
      name: "🍓 Strawberry",
      color: "red",
    },
    {
      id: 246,
      name: "🍐 Pear",
      color: "green",
    },
    {
      id: 888,
      name: "🍉 Watermelon",
      color: "green",
    },
    {
      id: 999,
      name: "🍑 Peach",
      color: "orange",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card fruit={fruit} key={fruit.id} />;
      })}
    </div>
  );
}
