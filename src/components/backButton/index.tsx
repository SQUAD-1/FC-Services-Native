import { BackButtonIcon } from "../../assets/backButtonIcon";
import { Back, ContainerBackButton, TextIconWrapper } from "./styles";

interface BackButtonProps {
  buttonText: string;
  buttonClick: () => void;
}

export const BackButton = ({ buttonText, buttonClick }: BackButtonProps) => {
  return (
    <ContainerBackButton>
      <TextIconWrapper onPress={buttonClick}>
        <BackButtonIcon /> <Back>{buttonText}</Back>
      </TextIconWrapper>
    </ContainerBackButton>
  );
};
