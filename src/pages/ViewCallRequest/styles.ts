import styled from "styled-components/native";

export const Container = styled.View`
display: flex;
flex-direction:column;
height: 100vh;
width: 100%;
padding: 20px;
background-color: #f8fcf6;
overflow-x: hidden;
::-webkit-scrollbar {
  display: none;
}
`;


export const ButtonArea = styled.View`
display:flex;
`;

export const RequestIdDiv =styled.View`
width: 100%;
overflow-x: hidden;
height: 52px;
::-webkit-scrollbar {
  display: none;
}
`

export const RequestIdText = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  color: #7AC143;
`;

export const InfoContainer = styled.View`
display: flex;
flex-direction: column;
gap:24px;
`
export const InfoDiv = styled.View`
justify-content: center;
width: 100%;
overflow-x: scroll;
height: 30px;
::-webkit-scrollbar {
  display: none;
}
`

export const InfoDivDescription = styled.View`
width: 100%;
justify-content: center;
min-height: 30px;
max-height: 112px;
overflow-y: scroll;
::-webkit-scrollbar {
  display: none;
}
`;

export const InfoText = styled.Text`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
display: flex;
align-items: center;
letter-spacing: 0.5px;
color: #49454F;
white-space: nowrap;
`;

export const InfoDescriptionText = styled.Text`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
display: flex;
align-items: center;
letter-spacing: 0.5px;
color: #49454F;
word-break: break-word;

`;

export const TypeAndPriorityDiv = styled.View`
display: flex;
flex-direction: row;
margin-right: calc(50%);
`
export const PriorityDiv  = styled.View`
display: flex;
flex-direction: row;
margin-left: 16px;
width:calc(100% - 16px);
`

export const Historic = styled.Text`
margin-top: 16px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.15px;
color: #000000;
`

export const HistoryContainer = styled.View`
display: flex;
margin-top: 16px;
align-items: center;
flex-direction: row;
width: 100%;
height: 32px;
overflow: hidden;
gap: 10px;
::-webkit-scrollbar {
  display: none;
}
`

export const CircleContainer = styled.View`
min-width: 32px;
min-height: 32px;
`

export const Circle = styled.View`
height:32px;
width:32px;
border-radius: 50%;
background-color: gray;
`

export const HistoryId = styled.Text`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
text-align: center;
letter-spacing: 0.15px;
color: #000000;
`

export const HistoryText = styled.Text`
font-style: normal;
font-weight: 400;
font-size: 14px;
display: flex;
align-items: center;
letter-spacing: 0.15px;
color: #000000;
margin-top:2px;
`