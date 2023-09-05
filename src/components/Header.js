import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View>
    <LinearGradient colors={['#9ee4d4', '#98e1d6', '#9ee4d4']} style={styles.linearGradient}>
       <View style={styles.container}>
       <View style={styles.container1}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
       <Ionicons name='search' size={22} color='#1f1f1f'/>
        <TextInput placeholder='Search Amazon.in'/>
        </View>
        <AntDesign name='scan1' size={22}/>
        </View>
        <Feather name='mic' size={22} color='black'/>
        </View>
    </LinearGradient>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    linearGradient : {padding:10},
    container : {flexDirection:'row',alignItems:'center',justifyContent:'space-between'},
    container1 : {flexDirection:'row',alignItems:'center',borderWidth:0.5,backgroundColor:'white',borderRadius:10,width:'90%',
    paddingHorizontal:10,justifyContent:'space-between',elevation:5}
})