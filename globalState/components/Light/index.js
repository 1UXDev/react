import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ name, isOn, onToggle, id, handleToggle }) {
  // function handleToggle() {
  //   setIsOn((isOn) => !isOn);
  // }

  return (
    <LightButton
      type="button"
      onClick={() => {
        handleToggle();
        console.log(id);
        //onToggle(id);
        // handleToggle(light.id);
      }}
      isOn={isOn}
    >
      <Icon isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
