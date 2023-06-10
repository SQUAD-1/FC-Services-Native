import React from "react";
import { Container, ButtonArea } from "./styles";
import { BackButton } from "../../Components";

export const ViewCallRequest: React.FC = () => {
  return (
    <Container>
      <ButtonArea>
        <BackButton />
      </ButtonArea>
    </Container>
  );
};
