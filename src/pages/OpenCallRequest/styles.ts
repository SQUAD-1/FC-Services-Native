import { ChangeEvent } from "react";
import { StyleSheet } from "react-native";
import { PickerStyle } from "react-native-picker-select";
import styled, { css } from "styled-components/native";

export const OpenCallContainer = styled.View`
  flex: 1;
  background: #f8fcf6;
  width: 100%;
  height: 100vh;
  padding: 16px 20px 0;
`;

export const OpenCallTitle = styled.Text`
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 0.5px;
  color: #7ac143;
`;

export const OpenCallContent = styled.View`
  padding-top: 38px;
  gap: 20px;
`;

interface OpenCallInputProps {
  height?: string;
  justifyContent?: string;
}
export const OpenCallInput = styled.TextInput<OpenCallInputProps>`
  border: none;
  height: ${({ height }) => height || "30px"};
  width: 100%;
  justify-content: flex-start;
  font-size: 16px;
  color: #77757b;
`;

export const OpenCallPicker = StyleSheet.create<PickerStyle>({
  inputAndroid: {
    fontFamily: "Roboto",
    height: "30px",
    backgroundColor: "#f8fcf6",
    borderWidth: 0,
  },
  inputIOS: {
    fontFamily: "Roboto",
    height: "30px",
    backgroundColor: "#f8fcf6",
    borderWidth: 0,
  },
  inputWeb: {
    fontFamily: "Roboto",
    height: "30px",
    backgroundColor: "#f8fcf6",
    borderWidth: 0,
    marginRight: "8.25px",
  },
});

export const FotterButtons = styled.View`
  display: grid;
  position: absolute;
  padding: 26px 20px 16px 0;
  right: 0;
  bottom: 0;
  width: 100%;
  border-top-width: 1px;
  border-top-color: #cac4d0;
`;

export const ConfirmButton = styled.View`
  justify-self: flex-end;
  width: 101px;
  height: 40px;
  background: #7ac143;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  letter-spacing: 0.1px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
`;
