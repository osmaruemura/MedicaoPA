import { View, ScrollView, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'

export default function App(){
  return(
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerPage}>
            <Text style={styles.textPage}>DIÁRIO CARDÍACO</Text>
          </View>
          <Image
            source={require("./assets/logotipo_Diario Cardiaco.png")}
            style={styles.logo}
          />
          <Text style={styles.title}>Inserir os dados:</Text>
          <View style={styles.bottomView}>
            <View style={styles.boxBottom}>
              <TextInput
                style={styles.input}
                placeholderTextColor="#707070"
                placeholder="Digite seu e-mail"
              />
              <TextInput
                style={styles.input}
                placeholderTextColor="#707070"
                placeholder="Digite sua Senha"
              />
              <TouchableOpacity style={styles.entrarBtn} onPress={() => console.log('Pressed')}>
                <Text style={styles.textEntrarBtn}>ENTRAR</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerRodape}>
            <Text style={styles.textPage}>Centro Universitário SENAC</Text>
            <Text style={styles.textPage}>Projeto Integrador V - Grupo 05</Text>
            <Text style={styles.textPage}>2025</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:15,
    marginTop: 30,
    backgroundColor: "white",
    justifyContent: "top",
    alignItens: "center",
  },
  containerPage:{
    backgroundColor: "#dcdcdc",
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:10,
    paddingRight:10,
    borderRadius:8,
  },
  textPage:{
    fontSize:14,
    fontWeight: 'bold',
    textAlign: "center",
    borderRadius:8,
  },
  logo:{
    marginTop:10,
    marginBottom:10,
  },
  title:{
    fontSize:20,
    fontWeight: 'bold',
  },
  bottomView:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  boxBottom:{
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.9)',
    marginBottom:5,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderRadius:8,
    padding:5,
    paddingBottom:70,
    paddingTop:5,
  },
  input:{
    height:40,
    margin:5,
    borderWidth:1,
    borderRadius:8,
    padding:5,
  },
  entrarBtn:{
    width: '40%',
    height:40,
    backgroundColor: 'blue',
    borderRadius:8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:15,
    marginLeft:100,
  },
  textEntrarBtn:{
    color: 'white',
    fontSize:15,
    fontWeight: 'bold',
  },
  containerRodape:{
    marginTop:10,
    backgroundColor: "#d3d3d3",
    borderRadius:8,
  }
});
