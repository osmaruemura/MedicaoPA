import React, { useState } from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';

export default function BoasVindas({navigation}) {
    return(
        <View>
          <ScrollView>
            <View style={styles.container}>
              <Text style={styles.title}>Boas Vindas!</Text>
              <Image
                source={require("../src/assets/BoasVindas_Diario Cardiaco.png")}
                style={styles.logoBoasVindas}
              />
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
                onPress={() => entrar()}
              />
            </View>
          </ScrollView>
        </View>
      )
}

const specificStyle = StyleSheet.create({
  button:{
    width: "100%",
    marginTop:40,
  },
})
