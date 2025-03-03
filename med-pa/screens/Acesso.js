import React, { useState } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Alert } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';
import usuarioService from '../services/UsuarioService';

export default function Acesso({navigation}){

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const entrar = () => {

    let data = {
      username: email,
      password: password
    }

    usuarioService.login(data)
    .then((response) => {
      setLoading(false)
      navigation.navigate("Boas Vindas")
    })
    .catch((error) => {
      setLoading(false)
      Alert.alert("Usuário não existe")
    })
  }

  const cadastrar = () => {
    navigation.navigate("Cadastro")
  }

  return(
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.textPage}>Gerenciamento de dados - Pressão Arterial </Text>
          </View>
          <Image
            source={require("../src/assets/logotipo_Diario Cardiaco.png")}
          />
          <Text style={styles.title}>Acesse sua conta:</Text>
          <Input
            placeholder="Digite seu e-mail"
            leftIcon={{ type: 'font-awesome', name: 'envelope'}}
            onChangeText={value => setEmail(value)}
            keyboardType="email-address"
          />
          <Input
            placeholder="Digite sua senha"
            leftIcon={{ type: 'font-awesome', name: 'lock' }}
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
          />

          { isLoading &&
            <Text>Carregando...</Text>
          }

          { !isLoading &&
            <Button
              icon={
                <Icon
                  name="check"
                  size={18}
                  color="white"
                />
              }
              title=" Entrar"
              buttonStyle={specificStyle.button}
              onPress={() => entrar()}
            />
          }
          <Button
            icon={
              <Icon
                name="user"
                size={18}
                color="white"
              />
            }
            title=" Cadastre-se"
            buttonStyle={specificStyle.button}
            onPress={() => cadastrar()}
          />
          <View  style={styles.containerEnd}>
            <Text style={styles.textPage}>Centro Universitário SENAC</Text>
            <Text style={styles.textPage}>Projeto Integrador V - Grupo 05 - 2025</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const specificStyle = StyleSheet.create({
  button:{
    width: "100%",
    marginTop:10,
  },
})
