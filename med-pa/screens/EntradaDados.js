import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Alert } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';
import usuarioService from '../services/UsuarioService';

export default function EntradaDados({navigation}) {

  const [dia, setDia] = useState(null)
  const [horario, setHorario] = useState(null)
  const [sistolica, setSistolica] = useState(null)
  const [diastolica, setDiastolica] = useState(null)
  const [errorDia, setErrorDia] = useState(null)
  const [errorHorario, setErrorHorario] = useState(null)
  const [errorSistolica, setErrorSistolica] = useState(null)
  const [errorDiastolica, setErrorDiastolica] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const validar = () =>{
    let error = false
    setErrorDia(null)
    setErrorHorario(null)
    setErrorSistolica(null)
    setErrorDiastolica(null)

    if (dia == null){
        setErrorDia("Preencha a data da leitura")
        error = true
    }
    if (horario == null){
        setErrorHorario("Preencha o horário da leitura")
        error = true
    }
    if (sistolica == null){
      setErrorSistolica("Preencha a pressão sistólica da leitura")
      error = true
    }
    if (diastolica == null){
      setErrorDiastolica("Preencha a pressão diastólica da leitura")
      error = true
    }
    return !error
  }

  const salvar = () => {
    if (validar()){
      setLoading(true)

    let data = {
      dia: dia,
      horario: horario,
      sistolica: sistolica,
      diastolica: diastolica
    }
    usuarioService.entrada(data)
    .then((response) => {
      setLoading(false)
      const titulo = (response.data.status) ? "Sucesso" : "Erro"
      Alert.alert(titulo, response.data.mensagem)
      console.log(response.data)
      navigation.navigate("Relatório de Dados")
    })
    .catch((error) => {
      setLoading(false)
      Alert.alert("Erro", "Houve um erro inesperado")
    })
    }
  }
    
  return(
    <View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Após a leitura das informações obtidas pelo aparelho do medidor de pressão, inserir os dados:</Text>
          <Input
            placeholder="Inserir a data (DD/MM/YYYY)"
            leftIcon={{ type: 'font-awesome', name: 'calendar' }}
            onChangeText={value => {
              setDia(value)
              setErrorDia(null)
            }}
            errorMessage={errorDia}
            returnKeyType="done"
          />
          <Input
            placeholder="Inserir a hora (HH:MM)"
            leftIcon={{ type: 'font-awesome', name: 'calendar' }}
            onChangeText={value => {
              setHorario(value)
              setErrorHorario(null)
            }}
            errorMessage={errorHorario}
            returnKeyType="done"
          />
          <Input
            placeholder="Inserir a pressão sistólica - mmHg"
            leftIcon={{ type: 'font-awesome', name: 'heart' }}
            onChangeText={value => {
              setSistolica(value)
              setErrorSistolica(null)
            }}
            errorMessage={errorSistolica}
            keyboardType="number-pad"
            returnKeyType="done"
          />
          <Input
            placeholder="Inserir a pressão diastólica - mmHg"
            leftIcon={{ type: 'font-awesome', name: 'heart' }}
            onChangeText={value => {
              setDiastolica(value)
              setErrorDiastolica(null)
            }}
            errorMessage={errorDiastolica}
            keyboardType="number-pad"
            returnKeyType="done"
          />

          { isLoading &&
            <Text>Carregando...</Text>
          }

          { !isLoading &&
            <Button
              icon={
                <Icon
                  name="save"
                  size={18}
                  color="white"
                />
              }
              title=" Salvar Dados"
                buttonStyle={specificStyle.button}
                onPress={() => salvar()}
            />
          }
        </View>
      </ScrollView>
    </View>
  )
}

const specificStyle = StyleSheet.create({
  button:{
    width: "100%",
    marginTop:20,
  },
})
