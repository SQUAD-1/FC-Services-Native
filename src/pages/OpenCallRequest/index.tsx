import { useNavigation } from "@react-navigation/native";
import { BackButton } from "../../components";
import {
  OpenCallContainer,
  OpenCallContent,
  OpenCallInput,
  OpenCallPicker,
  OpenCallTitle,
} from "./styles";
import { Fieldset } from "../../components/Fildset";
import Picker from "react-native-picker-select";
import React, { ChangeEvent, ChangeEventHandler, useState } from "react";

export const OpenCallRequest = () => {
  const [tipo, setTipo] = useState("");
  const [resumo, setResumo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const navigation = useNavigation();

 const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
   const numericValue = e.target.value.replace(/[^0-9]/g, "");

   let formattedValue = numericValue;
   if (numericValue.length >= 2) {
     formattedValue += numericValue.substring(0, 2) + "/";
   }
   if (numericValue.length >= 4) {
     formattedValue += numericValue.substring(2, 4) + "/";
   }
   if (numericValue.length >= 6) {
     formattedValue += numericValue.substring(4, 8);
   }

   setSelectedDate(numericValue);
 };

  return (
    <OpenCallContainer>
      <BackButton
        buttonText="voltar"
        buttonClick={() => navigation.navigate("Chamado")}
      />
      <OpenCallTitle>O que aconteceu?</OpenCallTitle>
      <OpenCallContent>
        <Fieldset legend="Resumo">
          <OpenCallInput
            value={resumo}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setResumo(e.target.value)
            }
            placeholder="Do que se trata o chamado?"
          />
        </Fieldset>
        <Fieldset legend="Tipo">
          <Picker
            value={tipo}
            onValueChange={(value) => setTipo(value)}
            items={[
              { label: "Selecione uma opção", value: "" },
              { label: "Opção 1", value: "opcao1" },
              { label: "Opção 2", value: "opcao2" },
              { label: "Opção 3", value: "opcao3" },
            ]}
            style={OpenCallPicker}
          />
        </Fieldset>
        <Fieldset legend="Descrição">
          <OpenCallInput
            height="46px"
            placeholder="Nos conte mais detalhes sobre o ocorrido..."
            value={descricao}
            onValueChange={(e: ChangeEvent<HTMLInputElement>) =>
              setDescricao(e.target.value)
            }
          />
        </Fieldset>
        <Fieldset legend="Data do ocorrido">
          <OpenCallInput
            type="date"
            value={selectedDate}
            onChange={handleInputChange}
            placeholder="dd/mm/aaaa"
            keyboardType="numeric"
            mask="dd/mm/aaaa"
            maxLength="8"
            pattern="23/12/2022"
          />
        </Fieldset>
      </OpenCallContent>
    </OpenCallContainer>
  );
};
