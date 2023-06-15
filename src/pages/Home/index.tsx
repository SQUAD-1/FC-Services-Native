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
  const usuarioLogado = JSON.parse(localStorage.getItem("userData") ?? "null");

  useEffect(() => {
    setIsLoading(true);
    setHasContent(false);

    api
      .get(`/ConsultaChamado/${usuarioLogado.matricula}`, {
        headers: {
          Authorization: `Bearer ${usuarioLogado.token}`,
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
  }, [usuarioLogado.matricula, usuarioLogado.token]);

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
                  key={item.idChamado}
                  idChamado={item.idChamado}
                  nome={item.nome}
                  dataRelato={item.dataRelato}
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
