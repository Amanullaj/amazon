import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import Navigation from './src/Navigation'


const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar backgroundColor={'#9ee4d4'} barStyle='dark-content'/>
      <Navigation/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})