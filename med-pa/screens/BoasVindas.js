import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';

export default function BoasVindas({navigation}) {

const iniciar = () => {
  navigation.navigate("Entrada de Dados")
}

const relatorio = () => {
  navigation.navigate("Relatório de Dados")
}

return(
  <View>
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../src/assets/BoasVindas_Diario Cardiaco.png")}
          style={styles.logoBoasVindas}
        />
          <Text>A pressão arterial é medida em milímetros de mercúrio (mmHg).</Text>
          <Text>O primeiro número é a pressão sistólica, que é a pressão quando o coração se contrai, e o segundo é a pressão diastólica, que é a pressão quando o coração relaxa.</Text>
          <Text style={styles.titleNormal}>Pressão arterial Normal</Text>
          <Text>Pressão Sistólica menor que 120 mmHg e Pressão Diastólica menor que 80 mmHg</Text>
          <Text style={styles.titleElevada}>Pressão arterial Elevada</Text>
          <Text>Pressão Sistólica entre 120-129 mmHg e Pressão Diastólica menor que 80 mmHg</Text>
          <Text style={styles.titleEstagio1}>Hipertensão Estágio 1</Text>
          <Text>Pressão Sistólica entre 130-139 mmHg ou Pressão Diastólica entre 80-89 mmHg</Text>
          <Text style={styles.titleEstagio2}>Hipertensão Estágio 2</Text>
          <Text>Pressão Sistólica maior que 140 mmHg ou Pressão Diastólica maior que 90 mmHg</Text>
          <Text style={styles.titleCrise}>Crise Hipertensiva</Text>
          <Text>Pressão Sistólica maior que 180 mmHg e/ou Pressão Diastólica maior que 120 mmHg</Text>
          <Button
            icon={
              <Icon
                name="check"
                size={18}
                color="white"
              />
            }
            title=" Iniciar"
            buttonStyle={specificStyle.button}
            onPress={() => iniciar()}
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
                onPress={() => relatorio()}
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
