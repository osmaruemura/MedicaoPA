import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex:1,
      padding: 15,
      backgroundColor: "white",
      justifyContent: "top",
      alignItens: "center",
    },
    textPage:{
      fontSize:14,
      fontWeight: 'bold',
      textAlign: "center",
    },
    logoBoasVindas:{
      marginTop:5,
      marginBottom:5,
      resizeMode: "contain",
      marginLeft: 50,
    },
    title:{
      fontSize:16,
      fontWeight: 'bold',
    },
    titleNormal:{
      marginTop: 10,
      fontSize:16,
      fontWeight: 'bold',
      color: "#6495ed",
    },
    titleElevada:{
      marginTop: 10,
      fontSize:16,
      fontWeight: 'bold',
      color: "#ffd700",
    },
    titleEstagio1:{
      marginTop: 10,
      fontSize:16,
      fontWeight: 'bold',
      color: "#ffa500",
    },
    titleEstagio2:{
      marginTop: 10,
      fontSize:16,
      fontWeight: 'bold',
      color: "#ff4500",
    },
    titleCrise:{
      marginTop: 10,
      fontSize:16,
      fontWeight: 'bold',
      color: "#b22222",
    },
    containerEnd:{
      marginTop: 20,
    },
    maskedInput:{
      flexGrow:1,
      height:41,
      fontSize:19,
      borderBottomColor: "#999",
      borderBottomWidth:1,
      borderStyle: "solid",
      alignSelf: "flex-start",
    },
    containerMask:{
      flexDirection: "row",
      marginBottom:8,
      marginLeft:9,
      marginRight:10,
    },
    errorMessage:{
      alignSelf: "flex-start",
      marginLeft:15,
      color: "#f00",
      fontSize:12,
    },
});

export default styles
