import React from "react"
import { Button, ButtonContainer, ContainerImputs, IconSpace, InputContainer, InputLogin, LoginContainer, Logo, TextCadastro, TextLogin, TextOuuuu, TextSenha, TwoInput } from "./styles";
import { FcLogo } from "../../assets/FclLogo";
import { EmailIcon } from "../../assets/Emialicon";
import { LockIcon } from "../../assets/LockIcon";

export const LoginScreen:React.FC = ():JSX.Element =>{
    return(
<LoginContainer>
    <Logo>

    <FcLogo/>
        
    </Logo>

    <InputContainer>

    <TextLogin>
        Entrar
    </TextLogin>

    <TwoInput>

    <ContainerImputs>
       <IconSpace> <EmailIcon/></IconSpace>
        <InputLogin placeholder="Digite o seu email"/>
     </ContainerImputs>

        <LockIcon/>
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