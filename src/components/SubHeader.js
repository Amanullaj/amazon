import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'

const SubHeader = () => {
  return (
    <View>
    <LinearGradient colors={['#afe9db', '#98e1d6', '#c3eee4']} style={styles.linearGradient}>
      <View style={{flexDirection:'row',paddingHorizontal:10,padding:5}}>
      <EvilIcons name='location' size={20} color='black'/>
      <Text style={{color:'black'}}>Deliver to Aman - Hyderabad 500045</Text>
      <Feather name='chevron-down' size={20}/>
      </View>
    </LinearGradient>
    </View>
  )
}

export default SubHeader

const styles = StyleSheet.create({})