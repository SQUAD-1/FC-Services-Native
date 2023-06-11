import styled from "styled-components/native";
import { useFonts } from 'expo-font';
export const ContainerBackButton = styled.View`
  margin-top: 16px;
  height: 47px;
  width: 100%;
`;

export const TextIconWrapper = styled.TouchableOpacity`
display: flex;
flex-direction: row;
align-items: center
`

export const Back = styled.Text`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    line-height: 36px;
    align-items: center;
    letter-spacing: 0.01em;
    color: rgb(0, 0, 0);
    margin-bottom: 4px;
`;

