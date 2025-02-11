import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';
import { TextInputMask } from 'react-native-masked-text';

export default function Cadastrar({navigation}){

  const [email, setEmail] = useState(null)
  const [nome, setNome] = useState(null)
  const [telefone, setTelefone] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorNome, setErrorNome] = useState(null)
  const [errorTelefone, setErrorTelefone] = useState(null)

  let telefoneField = null

  const validar = () =>{
    let error = false
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
    return !error
  }

  const salvar = () => {
    setErrorEmail(null)
    if (validar()){
        console.log("Salvou")
    }
  }

  return(
    <View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Cadastre-se:</Text>
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
            onChangeText={value => setTelefone(value)}
            keyboardType="phone-pad"
            returnKeyType="done"
            style={styles.maskedInput}
            ref={(ref) => telefoneField = ref}
          />
          </View>
          <Text style={styles.errorMessage}>{errorTelefone}</Text>
          <Button
            icon={
              <Icon
                name="check"
                size={20}
                color="white"
              />
            }
            title=" Salvar"
            buttonStyle={specificStyle.button}
            onPress={() => salvar()}
          />
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
