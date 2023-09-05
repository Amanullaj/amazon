import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Brands = () => {
  return (
    <View style={styles.container}>
        <Text style={{color:'black',fontSize:18,fontWeight:'bold',marginTop:5}}>Brands of the Day</Text>
    <View style={{flexDirection:'row',}}>
        <View style={{width:'50%',padding:5}}>
      <Image source={require('../images/brand1.jpeg')} style={styles.img}/>
      <Text style={{color:'black',fontSize:16,}}>Min. 20% off | Caratlane Diamond Necklace</Text>
      </View>
      <View style={{width:'50%',padding:5}}>      
      <Image source={require('../images/brand2.jpeg')} style={styles.img}/>
      <Text style={{color:'black',fontSize:16,}}>Min. 40% off | Fossil, Titan Smart watches</Text>
      </View>
      </View>
      <View style={{flexDirection:'row',}}>
      <View style={{width:'50%',padding:5}}>      
      <Image source={require('../images/brand3.jpeg')} style={styles.img}/>
      <Text style={{color:'black',fontSize:16,}}>Upto. 50% off | Top Brand Heels</Text>
      </View>
      <View style={{width:'50%',padding:5}}>      
      <Image source={require('../images/brand4.jpeg')} style={styles.img}/>
      <Text style={{color:'black',fontSize:16,}}>Min. 30% off | Sony Bluetooth Speakers</Text>
      </View>
      </View>
    </View>
  )
}

export default Brands

const styles = StyleSheet.create({
    container : {margin:10,borderTopWidth:0.5,borderTopColor:'#278b74'},
    img : {height:200,width:'100%'}
})