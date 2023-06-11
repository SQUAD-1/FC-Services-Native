import React from "react";
import { BackButtonIcon } from "../../assets/backButtonIcon";
import {Back, ContainerBackButton, TextIconWrapper } from "./styles";

interface BackButtonProps{
  buttonText: string;
  buttonClick: () => void
}

export const BackButton: React.FC<BackButtonProps> = ({buttonText, buttonClick }): JSX.Element => {
  return (
  <ContainerBackButton>
    <TextIconWrapper onPress={buttonClick}>
      <BackButtonIcon/> <Back>{buttonText}</Back>
    </TextIconWrapper>
  </ContainerBackButton>
  );
};
