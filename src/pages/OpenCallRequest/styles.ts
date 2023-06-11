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
  font-size: 16px;
  color: #77757b;
`;

export const OpenCallPicker = StyleSheet.create<PickerStyle>({
  inputAndroid: {
    height: "30px",
    backgroundColor: "#f8fcf6",
    border: "none",
  },
  inputIOS: {
    height: "30px",
    backgroundColor: "#f8fcf6",
    border: "none",
  },
  inputWeb: {
    height: "30px",
    backgroundColor: "#f8fcf6",
    border: "none",
    marginRight: "8.25px",
  },
});

export const DatePickerStyle = StyleSheet.create({
  datePicker: {
    width: "100%",
    height: "30px",
    border: "none",
  },
  dateInput: {
    border: "none",
  },
  dateText: {
    fontSize: 18,
    color: "red",
  },
  placeholderText: {
    fontSize: 18,
    color: "red",
  },
});
