import React, { useState } from "react"
import { Button, ButtonContainer, ContainerImputs, EraseSpace, IconSpace, InputContainer, InputLogin, LoginContainer, Logo, TextCadastro, TextLogin, TextOuuuu, TextSenha, TwoInput } from "./styles";
import { FcLogo } from "../../assets/FclLogo";
import { EmailIcon } from "../../assets/Emialicon";
import { api } from "../../services";
import { EraseIcon } from "../../assets/eraseIcon";

export const LoginScreen:React.FC = ():JSX.Element =>{

    interface UserLoginProps {
        email: string;
        senha: string;
    }

	const [isCorrectLogin, setIsCorrectLogin] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [formState, setFormState] = useState<UserLoginProps>({
		email: "",
		senha: "",
	});

    
    function UserLogin(formEmail: string, formSenha: string) {
		setIsLoading(true);
		const email = formEmail;
		const senha = formSenha;
		api
			.post("/Login", { email, senha })
			.then((response) => {
				localStorage.setItem("userData", JSON.stringify(response.data));
				window.location.href = "/home";
			})
			.catch(() => {
				setIsCorrectLogin(true);
			})
			.finally(() => setIsLoading(false));
	}

    const [passwordVisible, setPasswordVisible] = useState(false);

	const validEmail = /[a-zA-Z0-9._]+@[a-z0-9]+\.[a-z.]{2,}$/;
    const [emailValue, setEmailValue] = useState('');

    const [senhaValue, setSenhaValue] = useState('');
	const isInactiveButton =
		validEmail.test(formState.email) && formState.senha.length >= 8;
    

        const handleInputChange = (text: React.SetStateAction<string>) => {
            setEmailValue(text);
          };

          const handleInputPassword = (text: React.SetStateAction<string>) => {
            setSenhaValue(text);
          };


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
       <EraseSpace><EraseIcon/></EraseSpace>
        <InputLogin  keyboardType="email-address"  placeholder="Digite o seu email" onChangeText={handleInputChange} value={emailValue}/>
     </ContainerImputs>

     {!validEmail.test(emailValue) &&
									emailValue.length > 1 && (
										<>
											<span style={{ marginTop: "-10px" , color: "#b3261e"}}>
												Formato inválido, tente novamente!
											</span>
											{/* <RightImg src={WarnIcon} /> */}
										</>
									)}


     <InputLogin secureTextEntry   placeholder="Digite a sua senha"  onChangeText={handleInputPassword} value={senhaValue} style={{ marginTop: "-10px" ,  borderWidth: 1,
    borderColor: "#b3261e" , backgroundColor: senhaValue.length < 8 && senhaValue.length > 1 ? "#fbdde1" : "rgb(229, 230, 230);" }}/>

     {senhaValue.length < 8 && senhaValue.length > 1 && (
									<span style={{ marginTop: "-10px" , marginBottom: "10px", color: "#b3261e"}}>
										Senha deve ter no mínimo 8 caracteres
                                        </span>
								)}
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