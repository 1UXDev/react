import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function Artpieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <ArtPiecePreview
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
          ></ArtPiecePreview>
        );
      })}
    </ul>
  );
}
