import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { TicketViewer } from "../../components";
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
import { HomeProps, localStorageProps } from "../../types";
import AddTicketButton from "../../components/AddTicketButton";
import { BoxEmpty } from "../../components/BoxEmpty";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const [dataCall, setDataCall] = React.useState<HomeProps[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasContent, setHasContent] = React.useState(false);
  // const [dados, setDados] = useState<localStorageProps>();

  // useEffect(() => {
  //   const obterLocalStorage = async () => {
  //     try {
  //       const valorArmazenado = await AsyncStorage.getItem("userData");
  //       if (valorArmazenado !== null) {
  //         const dadosDesserializados = JSON.parse(valorArmazenado);
  //         setDados(dadosDesserializados as localStorageProps);
  //       }
  //     } catch (error) {
  //       console.log("Erro ao obter os dados do localStorage:", error);
  //     }
  //   };
  //   obterLocalStorage();
  // }, []);

  const dados: localStorageProps = {
    matricula: "11111",
    nome: "Teste Well",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjExMTExIiwiZW1haWwiOiJ0ZXN0ZTJAZ21haWwuY29tIiwibm9tZSI6IlRlc3RlIFdlbGwiLCJuYmYiOjE2ODY4NzgxMzksImV4cCI6MTY4Njk2NDUzOSwiaWF0IjoxNjg2ODc4MTM5fQ.mB1MqCKU4aqlZdsuKD3h8VpYWDSGvv9nHEh7XQCY0nc",
  };

  useEffect(() => {
    setIsLoading(true);
    setHasContent(false);
    api
      .get(`/ConsultaChamado/${dados?.matricula}`, {
        headers: {
          Authorization: `Bearer ${dados?.token}`,
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
  }, [dados?.matricula, dados?.token]);

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
            <Title>Bom dia, {dados?.nome}!</Title>
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
