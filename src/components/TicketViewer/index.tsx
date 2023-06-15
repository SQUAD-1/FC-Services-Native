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
  id,
  resume,
  date,
  status,
  isUpdated = false,
}: HomeProps) => {
  return (
    <TicketContainer isUpdated={isUpdated}
    onClick={() => {
      window.location.href="/Chamado";
      localStorage.setItem("idChamado", id);
    }}>
      <TextualContent>
        <TicketTitle>Chamado N°{id}</TicketTitle>
        <TicketDescription ellipsizeMode="tail">
          {resume}
        </TicketDescription>
      </TextualContent>
      <TicketInfo>
        <InfoContainer>
          <Label>Aberto em</Label>
          <Info weight="500">{date}</Info>
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
