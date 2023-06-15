import { Image } from "react-native";
import { BoxEmptyProps } from "../../types";
import { RequestsEmpty, RequestsTitle } from "./styles";

export const BoxEmpty = ({
  title,
  icon,
  alt,
  color,
  fontSize,
}: BoxEmptyProps) => {
  return (
    <RequestsEmpty>
      <Image
        style={{ width: 128, height: 128}}
        source={require("../../assets/EmptyBoxLight.png")}
        alt={alt}
      />
      <RequestsTitle color={color} fontSize={fontSize}>
        {title}
      </RequestsTitle>
    </RequestsEmpty>
  );
};
