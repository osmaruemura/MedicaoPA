import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';

export default function RelatorioDados({navigation}) {

  const iniciar = () => {
    navigation.navigate("Boas Vindas")
  }

    const sair = () => {
      navigation.navigate("Encerrar")
    }
    
    return(
      <View>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>Informações da medição da Pressão Arterial:</Text>
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
