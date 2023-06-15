import styled from "styled-components/native";;

const ButtonContainer = styled.View<{
    onClick: () => void;
    isDisabled?: boolean;
}>`
  position: absolute;
  width: 64px;
  height: 64px;
  background-color: #7ac143;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;

const PlusIcon = styled.Image`
    position: absolute;
    width: 24px;
    height: 24px;
`;

export { ButtonContainer, PlusIcon };
