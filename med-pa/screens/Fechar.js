import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';

export default function Fechar({navigation}){

    const encerrar = () => {
        navigation.navigate("Acesso")
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
          <Text style={styles.title}>Aplicativo elaborado por:</Text>
          <View  style={styles.containerEnd}>
          <Text style={styles.textPage}></Text>
            <Text style={styles.textPage}>CAMILA CRISTINA KLENGEL BIASOTTO MENDES</Text>
            <Text style={styles.textPage}>GABRIELA PEDROLLO DE SOUZA</Text>
            <Text style={styles.textPage}>MICAEL VERÍSSIMO G. GAROFALO ARAUJO</Text>
            <Text style={styles.textPage}>OSMAR UEMURA</Text>
            <Text style={styles.textPage}>PEDRO RAFAEL BRANDÃO FORTES</Text>
            <Text style={styles.textPage}></Text>
          </View>
          <Button
            icon={
              <Icon
                name=""
                size={18}
                color="white"
              />
            }
            title=" Sair do Aplicativo"
            buttonStyle={specificStyle.button}
            onPress={() => encerrar()}
          />
          <View  style={styles.containerEnd}>
            <Text style={styles.textPage}></Text>
            <Text style={styles.textPage}>Centro Universitário SENAC</Text>
            <Text style={styles.textPage}>Projeto Integrador V</Text>
            <Text style={styles.textPage}>Grupo 05</Text>
            <Text style={styles.textPage}>2025</Text>
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
