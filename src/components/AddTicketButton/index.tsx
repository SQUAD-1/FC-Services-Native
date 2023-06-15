import { Image, View, Button, Alert } from "react-native";
import { ButtonContainer, PlusIcon } from "./styles";
import { useNavigation } from "@react-navigation/native";

const AddTicketButton = () => {
    const navigation = useNavigation();
  return (
    <ButtonContainer onClick={() => navigation.navigate("" as never)}>
      <PlusIcon source={require("../../assets/plusIconWhite.png")} />
    </ButtonContainer>
  );
};

export default AddTicketButton;
