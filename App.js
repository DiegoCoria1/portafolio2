import React from 'react';
import { StatusBar } from 'expo-status-bar'; 
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
    
    <View style={styles.container}>
  
      <View style={{padding:3}}></View>
      <LinearGradient
        colors={['rgba(32,55,229,0.8)', 'transparent']}
        style={styles.background}
      />
      <Text style={styles.text}>Ejercicio 1 uwu</Text>
      <Text style={styles.smalltext}>Perdón la demora profe</Text>
      <View style={{padding:3}}></View>
      <StatusBar style="auto"/>
    </View>
    );
  }

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'aqua',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 700,
  },
    text: {
      color:'white',
      fontSize: 20,
      fontWeight: '600'
  },
  smalltext: {
    color:'white',
    fontSize: 12,
    fontWeight: '600'
},
});
