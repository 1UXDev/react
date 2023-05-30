import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ lightDB, onToggle }) {
  return (
    <StyledLights>
      {lightDB.map((light) => {
        return (
          <li key={light.id}>
            <Light
              name={light.name}
              id={light.id}
              onToggle={() => handleToggle(light.id)}
            />
          </li>
        );
      })}
      {/* <li>
        <Light name="Living Room" />
      </li>
      <li>
        <Light name="Kitchen" />
      </li>
      <li>
        <Light name="Bedroom" />
      </li>
      <li>
        <Light name="Bathroom" />
      </li>
      <li>
        <Light name="Garage" />
      </li>
      <li>
        <Light name="Porch" />
      </li>
      <li>
        <Light name="Garden" />
      </li>
      <li>
        <Light name="Office" />
      </li> */}
    </StyledLights>
  );
}
