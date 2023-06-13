import styled from "styled-components/native";

const TicketContainer = styled.View<{isUpdated: boolean}>`

  border-radius: 12px;
  background-color: #D9F5C5;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 24px;
  ${({ isUpdated }) => isUpdated && `
  box-shadow: 0px 8px 7px rgba(0, 0, 0, 0.25);
  border: 3px solid #7AC143;`}
`;

const TextualContent = styled.View`
flex: 3;
gap: 10px;
flex-direction: column;
`;
const TicketTitle = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #111314;
  justify-content: start;
`;

const TicketDescription = styled.Text`
  height: 40px;
  color: #111314;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  overflow: hidden;
`;

const TicketInfo = styled.View`
flex: 1;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: start;
`;

const InfoContainer = styled.View`
  `;

const Label = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #111314;
`;

const Info = styled.Text<{ weight?: string }>`
    font-size: 14px;
    font-weight: ${({ weight }) => weight ?? 500};
    color: #111314;
`;

export {
    TicketContainer,
    TextualContent,
    TicketTitle,
    TicketDescription,
    TicketInfo,
    InfoContainer,
    Label,
    Info
};
