import React, { useState } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';

//import Slider from '@react-native-community/slider'

export default function Login({navigation}){

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const entrar = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
    })
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
            style={styles.logo}
          />
          <Text style={styles.title}>Acesse sua conta:</Text>
          <Input
            placeholder="Digite seu e-mail"
            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
            onChangeText={value => setEmail(value)}
            keyboardType="email-address"
          />
          <Input
            placeholder="Digite sua senha"
            leftIcon={{ type: 'font-awesome', name: 'lock' }}
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
          />
          <Button
            icon={
              <Icon
                name="check"
                size={15}
                color="white"
              />
            }
            title="Entrar"
            onPress={() => entrar()}
          />
          <View  style={styles.containerEnd}>
            <Text style={styles.textPage}>Centro Universitário SENAC</Text>
            <Text style={styles.textPage}>Projeto Integrador V - Grupo 05</Text>
            <Text style={styles.textPage}>2025</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
