import { useNavigation } from "@react-navigation/native";
import { BackButton } from "../../components";
import {
  ConfirmButton,
  FotterButtons,
  OpenCallContainer,
  OpenCallContent,
  OpenCallInput,
  OpenCallPicker,
  OpenCallTitle,
} from "./styles";
import { Fieldset } from "../../components/Fildset";
import Picker from "react-native-picker-select";
import React, { ChangeEvent, useState } from "react";
import { api } from "../../services";

export const OpenCallRequest = () => {
  const [tipo, setTipo] = useState("");
  const [resumo, setResumo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [loading, setIsLoading] = useState(false);

  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/[^/0-9]/g, "");
    setSelectedDate(numericValue);
  };
  
  const chamadoData = {
    nome: resumo,
    tipo: tipo,
    dataRelato: selectedDate,
    descricao: descricao,
    empregado_Matricula: 77777,
  };

  const navigation = useNavigation();
  const CreateTicket = () => {
    setIsLoading(true);
    api
      .post("/CadastroChamado/", JSON.stringify(chamadoData), {
        headers: {
          // Authorization: `Bearer ${usuarioLogado.token}`,
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((err) => {
        console.error(`ops! ocorreu um erro ${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <OpenCallContainer>
      <BackButton
        buttonText="voltar"
        buttonClick={() => useNavigation("Chamado")}
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
              {
                label: "Falta de material",
                value: "Falta de material",
              },
              {
                label: "Problema com a internet",
                value: "Problema com a internet",
              },
              {
                label: "Solicitação de limpeza",
                value: "Solicitação de limpeza",
              },
              {
                label: "Solicitação de recurso",
                value: "Solicitação de recurso",
              },
              {
                label: "Objeto perdido",
                value: "Objeto perdido",
              },
              {
                label: "Outros",
                value: "Outros",
              },
            ]}
            style={OpenCallPicker}
          />
        </Fieldset>
        <Fieldset legend="Descrição">
          <OpenCallInput
            height="240px"
            placeholder="Nos conte mais detalhes sobre o ocorrido..."
            value={descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
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
            maxLength="10"
            pattern="23/12/2022"
          />
        </Fieldset>
      </OpenCallContent>
      <FotterButtons>
        <ConfirmButton>Confirmar</ConfirmButton>
      </FotterButtons>
    </OpenCallContainer>
  );
};
