import React, { useEffect, useState } from "react";
import { BackButton, Fieldset } from "../../components";
import {
  Circle,
  CircleContainer,
  Container,
  Historic,
  HistoryContainer,
  HistoryId,
  HistoryText,
  InfoContainer,
  InfoDescriptionText,
  InfoDivDescription,
  InfoDiv,
  InfoText,
  PriorityDiv,
  RequestIdDiv,
  RequestIdText,
  TypeAndPriorityDiv,
} from "./styles";
import { api } from "../../services";
import Spinner from "../../components/loadingScreen";

export const ViewCallRequest: React.FC = () => {
  const [listaChamados, setListaChamados] = useState<ChamadoScreenProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  type ObjectHistory = {
    idRegistroAtividade: number;
    horarioUltimo: string;
    informaoUltima: string;
  };

  interface ChamadoScreenProps {
    idChamado: string;
    nome: string;
    dataRelato: string;
    descricao: string;
    prioridade: string;
    horarioAbertura: Date;
    horarioUltimaAtualizacao: boolean;
    status: string;
    tempoDecorrido: Date;
    empregado_Matricula: number;
    tipo: string;
    registroAtividade: [ObjectHistory];
  }
  useEffect(() => {
    setIsLoading(true);
    api
      .get(`/ConsultaChamadoId/${1}`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEwMTAxIiwiZW1haWwiOiJhbGlzc29uZ2FicmllbGFzc3VuY2FvQGdtYWlsLmNvbSIsIm5vbWUiOiJBbGlzc29uIEdhYnJpZWwiLCJuYmYiOjE2ODY0Mzc1ODIsImV4cCI6MTY4NjUyMzk4MiwiaWF0IjoxNjg2NDM3NTgyfQ.d1Eez3yHcf61sU2BvoLOqzHsl61-QJ63-wss_9O_DFU`,
        },
      })
      .then((response) => setListaChamados(response.data))
      .catch((err) => {
        console.error(`ops! ocorreu um erro ${err}`);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Container>
      <Spinner visible={isLoading} size={"large"} color="red"></Spinner>
      <BackButton buttonClick={() => {}} buttonText="voltar" />
      <RequestIdDiv>
        <RequestIdText>Chamado n° {}</RequestIdText>
      </RequestIdDiv>
      <InfoContainer>
        <Fieldset legend="Resumo">
          <InfoDiv>
            <InfoText>{listaChamados[0]?.nome}</InfoText>
          </InfoDiv>
        </Fieldset>
        <Fieldset legend="Descrição">
          <InfoDivDescription>
            <InfoDescriptionText>
              {listaChamados[0]?.descricao}
            </InfoDescriptionText>
          </InfoDivDescription>
        </Fieldset>
        <Fieldset legend="Status">
          <InfoDiv>
            <InfoText>{listaChamados[0]?.status}</InfoText>
          </InfoDiv>
        </Fieldset>
        <TypeAndPriorityDiv>
          <Fieldset legend="Tipo">
            <InfoDiv>
              <InfoText>{listaChamados[0]?.tipo}</InfoText>
            </InfoDiv>
          </Fieldset>
          <PriorityDiv>
            <Fieldset legend="Prioridade">
              <InfoDiv>
                <InfoText>{listaChamados[0]?.prioridade}</InfoText>
              </InfoDiv>
            </Fieldset>
          </PriorityDiv>
        </TypeAndPriorityDiv>
        <Fieldset legend="Data do ocorrido">
          <InfoDiv>
            <InfoText>{listaChamados[0]?.dataRelato}</InfoText>
          </InfoDiv>
        </Fieldset>
      </InfoContainer>

      <Historic>Histórico</Historic>

      {listaChamados?.[0]?.registroAtividade.map((item, index) => {
        return (
          <HistoryContainer key={index}>
            <CircleContainer>
              <Circle />
            </CircleContainer>
            <HistoryId>#{item?.idRegistroAtividade}</HistoryId>
            <HistoryText numberOfLines={2}>{item?.informaoUltima}</HistoryText>
          </HistoryContainer>
        );
      })}
    </Container>
  );
};
