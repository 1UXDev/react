export default function Spotlight({ image, artist }) {
  return (
    <div className="spotlight">
      <p>Spotlight</p>
      <img src={image} width={400} />
      <h1>{artist}</h1>
    </div>
  );
}
