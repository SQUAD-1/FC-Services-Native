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
import React, { ChangeEvent, useEffect, useState } from "react";
import { api } from "../../services";
import Spinner from "../../components/loadingScreen";
import { localStorageProps } from "../../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const OpenCallRequest = () => {
  const [tipo, setTipo] = useState("");
  const [resumo, setResumo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [loading, setIsLoading] = useState(false);
  // const [dados, setDados] = useState<localStorageProps>();

  const handleInputChange = (e: React.SetStateAction<string>) => {
    const numericValue = e.toString().replace(/[^/0-9]/g, "");
    setSelectedDate(numericValue);
  };

  const navigation = useNavigation();

  const createTicket = () => {
    setIsLoading(true);

    // useEffect(() => {
    //   const obterLocalStorage = async () => {
    //     try {
    //       const valorArmazenado = await AsyncStorage.getItem("userData");
    //       if (valorArmazenado !== null) {
    //         const dadosDesserializados = JSON.parse(valorArmazenado);
    //         setDados(dadosDesserializados as localStorageProps);
    //       }
    //     } catch (error) {
    //       console.log("Erro ao obter os dados do localStorage:", error);
    //     }
    //   };
    //   obterLocalStorage();
    // }, []);

    const dados: localStorageProps = {
      matricula: "11111",
      nome: "Teste Well",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjExMTExIiwiZW1haWwiOiJ0ZXN0ZTJAZ21haWwuY29tIiwibm9tZSI6IlRlc3RlIFdlbGwiLCJuYmYiOjE2ODY4NzgxMzksImV4cCI6MTY4Njk2NDUzOSwiaWF0IjoxNjg2ODc4MTM5fQ.mB1MqCKU4aqlZdsuKD3h8VpYWDSGvv9nHEh7XQCY0nc",
    };

    const chamadoData = {
      nome: resumo,
      tipo: tipo,
      dataRelato: selectedDate,
      descricao: descricao,
      empregado_Matricula: dados?.matricula,
    };

    api
      .post("/CadastroChamado/", JSON.stringify(chamadoData), {
        headers: {
          Authorization: `Bearer ${dados?.token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        navigation.navigate("Home" as never);
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
