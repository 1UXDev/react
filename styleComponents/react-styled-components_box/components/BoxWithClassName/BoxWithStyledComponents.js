import styled from "styled-components";

export function BoxWithStyledComponents({ isBlack }) {
  return (
    <div>
      <StyledBox isBlack={isBlack}></StyledBox>
    </div>
  );
}

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;
  background-color: ${({ isBlack }) => (isBlack ? "black" : "green")};
`;
