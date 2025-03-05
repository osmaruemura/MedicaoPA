import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';
import usuarioService from '../services/UsuarioService';

export default function EntradaDados({navigation}) {

  const [dia, setDia] = useState(null)
  const [horario, setHorario] = useState(null)
  const [sistolica, setSistolica] = useState(null)
  const [diastolica, setDiastolica] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const salvar = () => {

    let data = {
      dia: dia,
      horario: horario,
      sistolica: sistolica,
      diastolica: diastolica
    }
    usuarioService.entrada(data)
    .then((response) => {
      setLoading(false)
      console.log(response.data)
    })
    .catch((error) => {
      setLoading(false)
      console.log(error)
      console.log("Deu erro")
    })

      //navigation.navigate("Relatório de Dados")
  }
    
  return(
    <View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Após a leitura das informações obtidas pelo aparelho do medidor de pressão, inserir os dados:</Text>
          <Input
            placeholder="Inserir a data (DD/MM/YYYY)"
            leftIcon={{ type: 'font-awesome', name: 'calendar' }}
            onChangeText={value => setDia(value)}
            returnKeyType="done"
          />
          <Input
            placeholder="Inserir a hora (HH:MM)"
            leftIcon={{ type: 'font-awesome', name: 'calendar' }}
            onChangeText={value => setHorario(value)}
            returnKeyType="done"
          />
          <Input
            placeholder="Inserir a pressão sistólica - mmHg"
            leftIcon={{ type: 'font-awesome', name: 'heart' }}
            onChangeText={value => setSistolica(value)}
            keyboardType="number-pad"
            returnKeyType="done"
          />
          <Input
            placeholder="Inserir a pressão diastólica - mmHg"
            leftIcon={{ type: 'font-awesome', name: 'heart' }}
            onChangeText={value => setDiastolica(value)}
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
