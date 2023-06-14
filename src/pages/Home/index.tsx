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
} from "./styles";
import { api } from "../../services";

export const Home = () => {
   interface HomeProps {
    idChamado: string;
    nome: string;
    dataRelato: string;
    status: string;
    horarioUltimaAtualizacao: boolean;
  }

  const [dataCall, setDataCall] = React.useState<HomeProps[]>([]);

  useEffect(() => {
		// setIsLoading(true);
		// setHasContent(false);
		api
			.get(`/ConsultaChamado/11111`, {
				headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjExMTExIiwiZW1haWwiOiJ0ZXN0ZTJAZ21haWwuY29tIiwibm9tZSI6IlRlc3RlIFdlbGwiLCJuYmYiOjE2ODY2OTAwMzcsImV4cCI6MTY4Njc3NjQzNywiaWF0IjoxNjg2NjkwMDM3fQ.rRndyRmTzWEt1K2lB0EMItAn2G3Yw9H-myP0PFAzknQ` },
			})
			.then((response) => {
				// setHasContent(true);
				setDataCall(response.data);
			})
			.catch((err) => {
				// setHasContent(false);
				console.error(`ops! ocorreu um erro ${err}`);
			})
			.finally(() => {
				// setIsLoading(false);
			});
	}, []);
  return (
    <FlexContainer>
      <PageContainer>
        <UpperContainer>
          <HeaderContainer>
            <FCLogo source={require("../../assets/fc.svg")} />
            <LocationContainer>
              <LocationText> FC Ibiribeira </LocationText>
              <LocationIcon source={require("../../assets/location.svg")} />
            </LocationContainer>
          </HeaderContainer>
          <SubHeader>
            <Title>Bom dia, Wellington!</Title>
            <PageTitle>Chamados recentes</PageTitle>
          </SubHeader>
        </UpperContainer>
        <ContentContainer>
          {dataCall ? (
            dataCall.map((ticket) => {
              return (
                <TicketViewer
                  key={ticket.idChamado}
                  id={ticket.idChamado}
                  description={ticket.nome}
                  date={ticket.dataRelato}
                  status={ticket.status}
                  isUpdated={true}
                />
              );
            })
          ) : (
            <Text>Nenhum chamado encontrado</Text>
          )}
        </ContentContainer>
      </PageContainer>
    </FlexContainer>
  );
};
