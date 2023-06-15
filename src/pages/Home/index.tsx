import React, { useEffect } from "react";
import { Text } from "react-native";
import { TicketViewer } from "../../components";
import { searchResults } from "../../data";
import {
  ContentContainer,
  FCLogo,
  FlexContainer,
  HeaderContainer,
  LocationContainer,
  LocationIcon,
  LocationText,
  PageContainer,
  PageTitle,
  SubHeader,
  Title,
  UpperContainer,
  UserActionContainer,
} from "./styles";
import { api } from "../../services";
import { HomeProps } from "../../types";
import AddTicketButton from "../../components/AddTicketButton";
import { BoxEmpty } from "../../components/BoxEmpty";

const Home = () => {
  const [dataCall, setDataCall] = React.useState<HomeProps[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasContent, setHasContent] = React.useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasContent(false);
    api
      .get(`/ConsultaChamado/11111`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjExMTExIiwiZW1haWwiOiJ0ZXN0ZTJAZ21haWwuY29tIiwibm9tZSI6IlRlc3RlIFdlbGwiLCJuYmYiOjE2ODY2OTAwMzcsImV4cCI6MTY4Njc3NjQzNywiaWF0IjoxNjg2NjkwMDM3fQ.rRndyRmTzWEt1K2lB0EMItAn2G3Yw9H-myP0PFAzknQ`,
        },
      })
      .then((response) => {
        setHasContent(true);
        setDataCall(response.data);
      })
      .catch((err) => {
        setHasContent(false);
        console.error(`ops! ocorreu um erro ${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <FlexContainer>
      <PageContainer>
        <UpperContainer>
          <HeaderContainer>
            <FCLogo source={require("../../assets/fc.svg")} />
            <LocationContainer>
              <LocationText> FC Imbiribeira </LocationText>
              <LocationIcon source={require("../../assets/location.svg")} />
            </LocationContainer>
          </HeaderContainer>
          <SubHeader>
            <Title>Bom dia, Wellington!</Title>
            <PageTitle>Chamados recentes</PageTitle>
          </SubHeader>
        </UpperContainer>
        <ContentContainer hasContent={hasContent}>
          {dataCall.length !== 0 ? (
            !isLoading ? (
              dataCall.map((item) => (
                <TicketViewer
                  key={item.id}
                  id={item.id}
                  resume={item.resume}
                  date={item.date}
                  status={item.status}
                  isUpdated={true}
                />
              ))
            ) : (
              <Text>Carregando...</Text>
            )
          ) : (
            <BoxEmpty title="Sem chamados no momento" />
          )}
        </ContentContainer>
        <UserActionContainer>
          <AddTicketButton />
        </UserActionContainer>
      </PageContainer>
    </FlexContainer>
  );
};

export { Home };
