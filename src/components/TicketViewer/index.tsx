import { HomeProps, IssueMobileProps } from "../../types";
import {
  TicketContainer,
  TextualContent,
  TicketTitle,
  TicketDescription,
  TicketInfo,
  InfoContainer,
  Label,
  Info,
} from "./styles";

const TicketViewer = ({
  idChamado,
  nome,
  dataRelato,
  status,
  isUpdated = false,
}: HomeProps) => {
  return (
    <TicketContainer
      isUpdated={isUpdated}
      onClick={() => {
        window.location.href = "/Chamado";
        localStorage.setItem("idChamado", idChamado);
      }}>
      <TextualContent>
        <TicketTitle>Chamado N°{idChamado}</TicketTitle>
        <TicketDescription ellipsizeMode="tail">{nome}</TicketDescription>
      </TextualContent>
      <TicketInfo>
        <InfoContainer>
          <Label>Aberto em</Label>
          <Info weight="500">{dataRelato}</Info>
        </InfoContainer>
        <InfoContainer>
          <Label>Status</Label>
          <Info weight="600">{status}</Info>
        </InfoContainer>
      </TicketInfo>
    </TicketContainer>
  );
};

export default TicketViewer;
