import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Alert } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';
import { TextInputMask } from 'react-native-masked-text';
import usuarioService from '../services/UsuarioService';

export default function Cadastrar({navigation}){

  const [email, setEmail] = useState(null)
  const [nome, setNome] = useState(null)
  const [telefone, setTelefone] = useState(null)
  const [senha, setSenha] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorNome, setErrorNome] = useState(null)
  const [errorTelefone, setErrorTelefone] = useState(null)
  const [errorSenha, setErrorSenha] = useState(null)
  const [isLoading, setLoading] = useState(false)

  let telefoneField = null

  const validar = () =>{
    let error = false
    setErrorEmail(null)
    setErrorSenha(null)

    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(email).toLowerCase())){
        setErrorEmail("Preencha seu e-mail corretamente")
        error = true
    }
    if (nome == null){
        setErrorNome("Preencha seu nome completo")
        error = true
    }
    if (telefone == null){
        setErrorTelefone("Preencha seu telefone válido")
        error = true
    }
    if (senha == null){
      setErrorSenha("Preencha com sua senha")
      error = true
    }
    return !error
  }

  const salvar = () => {
    if (validar()){
        setLoading(true)

        let data = {
          nome: nome,
          telefone: telefone,
          email: email,
          senha: senha
        }

        usuarioService.cadastrar(data)
        .then((response) => {
          setLoading(false)
          const titulo = (response.data.status) ? "Sucesso" : "Erro"
          Alert.alert(titulo, response.data.mensagem)
          console.log(response.data)
          navigation.navigate("Acesso")
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
          <Text style={styles.title}>Cadastre-se:</Text>
          <Input
            placeholder="Nome"
            onChangeText={value => {
                setNome(value)
                setErrorNome(null)
            }}
            errorMessage={errorNome}
          />
          <View style={styles.containerMask}>
          <TextInputMask
            placeholder="Telefone"
            type={'cel-phone'}
            options={{
              maskType: 'BRL',
              withDDD: true,
              dddMask: '(99) ',
            }}
            value={telefone}
            onChangeText={value => {
              setTelefone(value)
              setErrorTelefone(null)
            }}
            keyboardType="number-pad"
            returnKeyType="done"
            style={styles.maskedInput}
            ref={(ref) => telefoneField = ref}
          />
          </View>
          <Text style={styles.errorMessage}>{errorTelefone}</Text>
          <Input
            placeholder="E-mail"
            onChangeText={value => {
                setEmail(value)
                setErrorEmail(null)
            }}
            keyboardType="email-address"
            errorMessage={errorEmail}
          />
          <Input
            placeholder="Senha"
            onChangeText={value => setSenha(value)}
            errorMessage={errorSenha}
            secureTextEntry={true}
          />

        { isLoading &&
          <Text>Carregando...</Text>
        }

        { !isLoading &&
          <Button
            icon={
              <Icon
                name="save"
                size={20}
                color="white"
              />
            }
            title=" Salvar"
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
    marginTop:40,
  },
})
