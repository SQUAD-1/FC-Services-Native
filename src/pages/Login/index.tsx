import React, { useState } from "react"
import { Button, ButtonContainer, ContainerImputs, EraseSpace, EyeSpace, IconSpace, InputContainer, InputLogin, LoginContainer, Logo, TextCadastro, TextLogin, TextOuuuu, TextSenha, TwoInput } from "./styles";
import { FcLogo } from "../../assets/FclLogo";
import { EmailIcon } from "../../assets/Emialicon";
import { api } from "../../services";
import { EraseIcon } from "../../assets/eraseIcon";
import { Image } from 'react-native';

export const LoginScreen: React.FC = (): JSX.Element => {

    const myImage = require('../../assets/trailing-icon.png');
    const LockImage = require('../../assets/Lock.png')
    const EnterIcon = require('../../assets/icon.png')
    const EnterWhite = require('../../assets/iconEnter.png')
    const OlhoCortado = require('../../assets/state-layer.png')

    interface UserLoginProps {
        email: string;
        senha: string;
    }

    const [isCorrectLogin, setIsCorrectLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);



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



    const handleInputChange = (text: React.SetStateAction<string>) => {
        setEmailValue(text);
    };

    const handleInputPassword = (text: React.SetStateAction<string>) => {
        setSenhaValue(text);
    };


    return (
        <LoginContainer>
            <Logo>

                <FcLogo />

            </Logo>

            <InputContainer>

                <TextLogin>
                    Entrar
                </TextLogin>

                <TwoInput>

                    <ContainerImputs style={{ marginBottom: "20px" }}>
                        <IconSpace> <EmailIcon /></IconSpace>
                        <EraseSpace onPress={()=>setEmailValue("")}><EraseIcon /></EraseSpace>
                        <InputLogin keyboardType="email-address" placeholder="Digite o seu email" onChangeText={handleInputChange} value={emailValue} style={{
                            borderWidth: 1,
                            backgroundColor: emailValue.length === 0 ? "rgb(229, 230, 230);" : !validEmail.test(emailValue) &&
                                emailValue.length > 0 ? "#fbdde1" : "#EBFCE3"
                        }} />
                    </ContainerImputs>

                    {!validEmail.test(emailValue) &&
                        emailValue.length > 1 && (
                            <>
                                <span style={{ marginTop: "-30px", color: "#b3261e" }}>
                                    Formato inválido, tente novamente!
                                </span>
                                {/* <RightImg src={WarnIcon} /> */}
                            </>
                        )}
                    <ContainerImputs style={{ marginTop: "10px" }}>

                        <IconSpace style={{ marginLeft: "7px", marginTop: "-4px" }} > <Image source={LockImage} style={{ width: 25, height: 25 }} /></IconSpace>


                        <EyeSpace onPress={() => setPasswordVisible(!passwordVisible)}> <Image source={passwordVisible ? OlhoCortado : myImage} style={{ width: 50, height: 50 }} /></EyeSpace>


                        <InputLogin secureTextEntry={passwordVisible} placeholder="Digite a sua senha" onChangeText={handleInputPassword} value={senhaValue} selectionColor="transparent" underlineColorAndroid="transparent" style={{
                            marginTop: "-10px", borderWidth: 1,
                            backgroundColor: senhaValue.length === 0 ? "rgb(229, 230, 230);" : senhaValue.length < 8 && senhaValue.length > 0 ? "#fbdde1" : "#EBFCE3"
                        }} />
                    </ContainerImputs>



                    {senhaValue.length < 8 && senhaValue.length > 1 && (
                        <span style={{ marginTop: "-10px", marginBottom: "10px", color: "#b3261e" }}>
                            Senha deve ter no mínimo 8 caracteres
                        </span>
                    )}

                </TwoInput>

                <TextSenha>Esqueci a senha </TextSenha>

            </InputContainer>

            <ButtonContainer>
                <Button  onPress={ () => UserLogin(emailValue,senhaValue)} disabled={!(validEmail.test(emailValue) && senhaValue.length >= 8)} isActive={validEmail.test(emailValue) && senhaValue.length >= 8} style={{
                    backgroundColor: validEmail.test(emailValue) && senhaValue.length >= 8 ? "#EA374D" : "rgb(222, 224, 221)"
                }}>

                    <IconSpace style={{ marginLeft: "70px" }} >{
                        validEmail.test(emailValue) && senhaValue.length >= 8 ?
                            <Image source={EnterWhite} style={{ width: 25, height: 25 }} /> : <Image source={EnterIcon} style={{ width: 25, height: 25 }} />} </IconSpace>
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