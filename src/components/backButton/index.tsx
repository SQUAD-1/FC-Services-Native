import { Image, View } from "react-native";
import { Back, ContainerBackButton, TextIconWrapper } from "./styles";

interface BackButtonProps {
  buttonText: string;
  buttonClick?: () => void;
}

export const BackButton = ({ buttonText, buttonClick }: BackButtonProps) => {
  return (
    <ContainerBackButton>
      <TextIconWrapper onPress={buttonClick}>
        <View>
          <Image source={require("../../assets/backButtonIcon.png")} /> <Back>{buttonText}</Back>
        </View>
      </TextIconWrapper>
    </ContainerBackButton>
  );
};
