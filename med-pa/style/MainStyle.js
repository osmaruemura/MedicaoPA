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
      marginLeft:50,
    },
    title:{
      fontSize:16,
      fontWeight: 'bold',
    },
    containerEnd:{
      marginTop: 20,
    },
    maskedInput:{
      flexGrow:1,
      height:50,
      fontSize:19,
      borderBottomColor: "#999",
      borderBottomWidth:1,
      borderStyle: "solid",
      alignSelf: "flex-start",
    },
    containerMask:{
      flexDirection: "row",
      marginBottom:5,
      marginLeft:10,
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
