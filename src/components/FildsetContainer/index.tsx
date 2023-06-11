import { ReactNode } from "react";
import { FieldsetContainer, LegendContainer, LegendText } from "./styles";

interface FildsetProps {
    children: ReactNode;
    legend: string
}
export const FildsetContainer = ({children, legend}:FildsetProps): JSX.Element =>{
    return(
        <FieldsetContainer>
        <LegendContainer>
          <LegendText>{legend}</LegendText>
        </LegendContainer>
        {children}
      </FieldsetContainer>
    );
}