import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'


const Deals = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:18,color:'black',fontWeight:'bold',paddingHorizontal:10}}>Recommended Deals for You</Text>
      <Image source={require('../images/recommend.jpg')} style={{width:'100%',height:250,marginTop:5}}/>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <TouchableOpacity style={{backgroundColor:'red',margin:10,borderRadius:5,width:'15%',alignItems:'center'}}>
            <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>18%</Text>
        </TouchableOpacity>
        <Text style={{color:'red',fontWeight:'bold',fontSize:16}}>Deal</Text>
      </View>
      <View style={{flexDirection:'row',marginHorizontal:10,}}>
      <Text style={{color:'black',fontWeight:'bold',marginRight:10}}>₹ 1,549.00</Text>
      <Text style={{textDecorationLine:'line-through'}}>M.R.P ₹ 1,999.00</Text>
      </View>
      <Text style={{marginHorizontal:10,color:'black',fontSize:16,marginVertical:5}}>Nykaa Face Wash Gentle Skin Cleanser for all skin types </Text>
      <Text style={{marginHorizontal:10,color:'#278b74'}}>See all deals</Text>
    </View>
  )
}

export default Deals

const styles = StyleSheet.create({
    container : {marginTop:20,}
})