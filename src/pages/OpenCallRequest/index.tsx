import { useNavigation } from "@react-navigation/native";
import { BackButton } from "../../components";
import {
  ButtonText,
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
import Spinner from "../../components/loadingScreen";

export const OpenCallRequest = () => {
  const [tipo, setTipo] = useState("");
  const [resumo, setResumo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [loading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.SetStateAction<string>) => {
    const numericValue = e.toString().replace(/[^/0-9]/g, "");
    setSelectedDate(numericValue);
  };

  const navigation = useNavigation();

  const createTicket = () => {
    setIsLoading(true);

    const usuarioLogado = JSON.parse(
      localStorage.getItem("userData") ?? "null"
    );
    const chamadoData = {
      nome: resumo,
      tipo: tipo,
      dataRelato: selectedDate,
      descricao: descricao,
      empregado_Matricula: parseInt(usuarioLogado.matricula),
    };

    api
      .post("/CadastroChamado/", JSON.stringify(chamadoData), {
        headers: {
          Authorization: `Bearer ${usuarioLogado.token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        navigation.navigate("Home" as never)
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
      {!loading ? (
        <>
          <BackButton
            buttonText="voltar"
            buttonClick={() => navigation.navigate("Home" as never)}
          />
          <OpenCallTitle>O que aconteceu?</OpenCallTitle>
          <OpenCallContent>
            <Fieldset legend="Resumo">
              <OpenCallInput
                value={resumo}
                onChangeText={(e: React.SetStateAction<string>) => setResumo(e)}
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
                onChangeText={(e: React.SetStateAction<string>) =>
                  setDescricao(e)
                }
              />
            </Fieldset>
            <Fieldset legend="Data do ocorrido">
              <OpenCallInput
                value={selectedDate}
                onChangeText={handleInputChange}
                placeholder="dd/mm/aaaa"
                keyboardType="numeric"
                maxLength={10}
              />
            </Fieldset>
          </OpenCallContent>
          <FotterButtons>
            <ConfirmButton onPress={createTicket}>
              <ButtonText>Confirmar</ButtonText>
            </ConfirmButton>
          </FotterButtons>
        </>
      ) : (
        <Spinner visible={loading} size={"large"} color="red"></Spinner>
      )}
    </OpenCallContainer>
  );
};
