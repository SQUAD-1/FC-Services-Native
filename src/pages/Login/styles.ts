import styled from "styled-components/native";

export const LoginContainer = styled.View`
height: 100vh;
width: 100%;
display: flex;
align-items: center;
padding: 20px;
gap: 50px;
justify-content: space-between;


`

export const Logo = styled.View`
 width: 100%;
 height: 150px;
 display: flex;
 justify-content: center;
 align-items: center;
`


export const InputContainer = styled.View `
   width: 100%;
   height: 200px;
   display: flex;
   justify-content: space-around;
 `

 export const ButtonContainer = styled.View`
    width: 100%;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
 `

export const TwoInput = styled.View`
    width: 100%;
    gap: 10px;
    
`

export const TextLogin = styled.Text`
    
    color: rgb(83, 86, 90);
    font-size: 35px;
    font-weight: 500;
    margin-bottom: 12px;
 `

 export const  InputLogin = styled.TextInput`   

    width: 100%;
    height: 50px;
    display: flex;
    background-color: rgb(229, 230, 230);
   /* margin-left: -50px; */
     align-items: center;

   
    background-color: rgb(229, 230, 230);
    padding: 8px 48px;
    border-radius: 4px 4px 0px 0px;
    margin-bottom: 8px;
    color: rgba(28, 27, 31, 0.698);
    font-weight: 400;
    outline: none;
    font-size: 15px;

      &:focus{
         border: none;
      } 
  
 `

 export const TextSenha = styled.Text`
    display: inline-flex;
    justify-content: end;
    color: rgb(90, 143, 25);
    font-size: 14px;
    font-weight: 500;
    
 `

 export const Button = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    height: 40px;
    width: 265px;
    gap: 8px;
    align-self: center;
    background-color: rgb(222, 224, 221);
    color: rgb(145, 151, 147);
 `


export const TextOuuuu = styled.Text`
    
    color: rgb(83, 86, 90);
    font-size: 20px;
    font-weight: 500;
    font-weight: 500;
    text-align: center;

 `

export const TextCadastro = styled.Text`
display: inline-flex;
justify-content: end;
color: rgb(43, 108, 1);
font-size: 16px;
font-weight: 500;

`

export const ContainerImputs = styled.View`
display: flex;
flex-direction: row;
position: relative;
align-items: center;

`

export const IconSpace = styled.View`
position: absolute;
top:6;
left: 5px;

`
export const EraseSpace = styled.View`
 position: absolute;
 top: 6;
 right: 5 
`