import React from "react"
import { Button, ButtonContainer, InputContainer, InputLogin, LoginContainer, Logo, TextCadastro, TextLogin, TextOuuuu, TextSenha, TwoInput } from "./styles";

export const LoginScreen:React.FC = ():JSX.Element =>{
    return(
<LoginContainer>
    <Logo>
        
    </Logo>

    <InputContainer>

    <TextLogin>
        Entrar
    </TextLogin>

    <TwoInput>
     <InputLogin placeholder="Digite o seu email">

     </InputLogin>

     <InputLogin placeholder="Digite a sua senha">
        
     </InputLogin>
     </TwoInput>

     <TextSenha>Esqueci a senha </TextSenha>

    </InputContainer>

    <ButtonContainer>
    <Button>
        Entrar 
    </Button>

    <TextOuuuu>
           ou


    </TextOuuuu>
    <TextOuuuu>
           Não possui uma conta? <TextCadastro>Cadastre-se</TextCadastro>
           
    </TextOuuuu>
    </ButtonContainer>

</LoginContainer>
    );
}