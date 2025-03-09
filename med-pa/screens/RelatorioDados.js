import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';
import usuarioService from '../services/UsuarioService';
import React, { useEffect, useState } from 'react';

export default function RelatorioDados({navigation}) {

  const iniciar = () => {
    navigation.navigate("Boas Vindas")
  }

  const sair = () => {
    navigation.navigate("Encerrar")
  }

  const getUser = async (setData, setLoading, setError) => {
    setLoading(true);

    try {
      const response = await usuarioService.listar();
      setData(response?.data);
      setLoading(false)
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  };
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)

  useEffect(() => {
    getUser(setData, setLoading, setError)
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Registros das medições das Pressões Arteriais:</Text>
      <Text></Text>
      <Text style={styles.title}>        Data         Hora       Sistólica      Diastólica</Text>
        <>  
          {!loading && data?.length
            ? data.map((data,i) => (
              <Text>{data.dia} - {data.horario} - {data.sistolica} mmHg - {data.diastolica} mmHg</Text>
            ))
          : null}
        </>
        <Button
          icon={
            <Icon
              name=""
              size={18}
              color="white"
            />
          }
            title=" Boas Vindas"
            buttonStyle={specificStyle.button}
            onPress={() => iniciar()}
        />
        <Button
          icon={
            <Icon
              name=""
              size={18}
              color="white"
            />
          }
            title=" Sair"
            buttonStyle={specificStyle.button}
            onPress={() => sair()}
      />
    </View>
  )
}

const specificStyle = StyleSheet.create({
  button:{
    width: "100%",
    marginTop:20,
  },
})
