import { ReactNode } from "react";
import { FieldsetContainer, LegendContainer, LegendText } from "./styles";

interface FildsetProps {
  children: ReactNode;
  legend: string;
}
export const Fieldset = ({ children, legend }: FildsetProps) => {
  return (
    <FieldsetContainer>
      <LegendContainer>
        <LegendText>{legend}</LegendText>
      </LegendContainer>
      {children}
    </FieldsetContainer>
  );
};
