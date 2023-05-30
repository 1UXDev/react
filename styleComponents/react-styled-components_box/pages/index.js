import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import { BoxWithStyledComponents } from "../components/BoxWithClassName/BoxWithStyledComponents.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <Div>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
