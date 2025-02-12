import React, { useState } from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';

export default function EntradaDados({navigation}) {

    const iniciar = () => {
      navigation.navigate("Entrada de Dados")
    }
    
    return(
      <View>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>Após a leitura das informações obtidas pelo aparelho do medidor de pressão, inserir os dados:</Text>
            <Input
                placeholder="Inserir a data"
                leftIcon={{ type: 'font-awesome', name: 'calendar' }}
                onChangeText={value => setData(value)}
                keyboardType="phone-pad"
                returnKeyType="done"
            />
            <Input
                placeholder="Inserir a hora"
                leftIcon={{ type: 'font-awesome', name: 'clock' }}
                onChangeText={value => setHorario(value)}
                keyboardType="phone-pad"
                returnKeyType="done"
            />
            <Input
                placeholder="Inserir a pressão sistólica - mmHg"
                leftIcon={{ type: 'font-awesome', name: 'heart' }}
                onChangeText={value => setSistolica(value)}
                keyboardType="phone-pad"
                returnKeyType="done"
            />
            <Input
                placeholder="Inserir a pressão diastólica - mmHg"
                leftIcon={{ type: 'font-awesome', name: 'heart' }}
                onChangeText={value => setDiastolica(value)}
                keyboardType="phone-pad"
                returnKeyType="done"
            />
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
              <Button
                icon={
                  <Icon
                    name="book"
                    size={18}
                    color="white"
                  />
                }
                title=" Relatório de Dados Armazenados"
                buttonStyle={specificStyle.button}
                onPress={() => cancelar()}
              />
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
