import styled from "styled-components/native";

const FlexContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 4% 4% 0 4%;
`;

const UpperContainer = styled.View`
width: 100%;
gap: 8px;
`

const HeaderContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
`;

const FCLogo = styled.Image`
  height: 62px;
  width: 62px;
  color: #E71C35;
`
const LocationContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: fit-content;
  display: flex;
  flex-direction: row;
`;

const LocationText = styled.Text`
font-size: 16px;
font-weight: 600;
`

const LocationIcon = styled.Image`
width: 24px;
height: 24px;
`

const Title = styled.Text`
  color: #7AC143;
  font-size: 24px;
  font-weight: 600;
`;

const PageTitle = styled.Text`
font-size: 18px;
font-weight: 600;
`;

const SubHeader = styled.View`
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 12px;
`;

const ContentContainer = styled.View`
  flex: 1;
  width: 100%;
  gap: 12px;
  overflow: scroll;
  padding: 12px 0;
`;

const PageContainer = styled.View`
width: 100%;
height: 100%;
gap: 16px;
overflow: visible;
`

export {
  FlexContainer,
  UpperContainer,
  Title,
  FCLogo,
  LocationContainer,
  LocationText,
  LocationIcon,
  HeaderContainer,
  PageTitle,
  SubHeader,
  ContentContainer,
  PageContainer
}
