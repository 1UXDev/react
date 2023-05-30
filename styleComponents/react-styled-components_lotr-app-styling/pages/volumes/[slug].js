import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled from "styled-components";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;

  const Main = styled.div`
    display: flex;
    flex-flow: column wrap;
    gap: 12px;
    align-items: center;
    margin: 0px auto;

    &:first-child a,
    a:visited {
      margin-top: 12px;
      display: block;
      color: white;
    }
  `;

  const Background = styled.div`
    background-color: ${volume.color};
    height: 312px;
    width: 100%;
    position: absolute;
    top: 0px;
    z-index: -99;
  `;

  const H1 = styled.h1`
    margin: 48px 0px 0px 0px;
  `;

  const VisualNav = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    width: 100%;
    background-color: ${volume.color};
    }
  `;

  const StyledLink = styled(Link)`
    display: flex;
    flex-flow: column wrap;
    text-align: center;
    padding: 12px;
    min-width: 40%;
  `;

  return (
    <Main>
      <Link href="/volumes">← All Volumes</Link>
      <Background />
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />

      <H1>{title}</H1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>

      <h3>More Books</h3>
      <VisualNav>
        {previousVolume ? (
          <StyledLink className="prev" href={`/volumes/${previousVolume.slug}`}>
            <Image
              src={previousVolume.cover}
              alt={`Cover image of ${previousVolume.title}`}
              width={70}
              height={115}
            />
            <p>
              Previous Volume: <br></br>
              {previousVolume.title}
            </p>
          </StyledLink>
        ) : null}
        {nextVolume ? (
          <StyledLink className="next" href={`/volumes/${nextVolume.slug}`}>
            <Image
              src={nextVolume.cover}
              alt={`Cover image of ${nextVolume.title}`}
              width={70}
              height={115}
            />
            <p>
              Next Volume: <br></br> {nextVolume.title}
            </p>
          </StyledLink>
        ) : null}
      </VisualNav>
    </Main>
  );
}
