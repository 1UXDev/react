export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <li>
      <img src={image} width={100}></img>
      <h2>{title}</h2>
      <p>{artist}</p>
    </li>
  );
}
