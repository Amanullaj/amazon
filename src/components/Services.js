import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import React from 'react'


const Services = () => {
    const SearchData = [
        {id:1,title:'Keep Shopping for LED Strip Lights',image : require('../images/service1.jpeg')},
        {id:2,title:'Keep shopping for Toy foam blasters',image : require('../images/service2.jpeg')},
        {id:3,title:'Samsung Galaxy S20 80,000',image : require('../images/service3.jpeg')},
        {id:4,title:'Continue browsing for it',image : require('../images/service4.jpeg')},
        {id:5,title:'Keep shopping for kitchen accesories',image : require('../images/service5.png')},
        {id:6,title:'Top picks for you in food',image : require('../images/service6.jpeg')},
        {id:7,title:'Top Deals in Home Appliances',image : require('../images/service7.jpeg')},
    ]
  return (
    <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}
        contentContainerStyle={{paddingRight:10}}>
        <View style={{backgroundColor:'white',padding:10,elevation:5,borderRadius:5}}>
            <View style={{flexDirection:'row'}}>
            <View style={styles.imgContainer}>
            <Image source={require('../images/amazon-pay.png')} style={styles.img}/>
            <Text style={styles.txt}>Amazon Pay</Text>
            </View>
            <View style={styles.imgContainer}>
            <Image source={require('../images/send-money.jpg')} style={styles.img}/>
            <Text style={styles.txt}>Send Money</Text>
            </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <View style={styles.imgContainer}>
            <Image source={require('../images/scan-qr.jpeg')} style={styles.img}/>
            <Text style={styles.txt}>Scan Qr</Text>
            </View>
            <View style={styles.imgContainer}>
            <Image source={require('../images/pay-bills.jpeg')} style={styles.img}/>
            <Text style={styles.txt}>Pay Bills</Text>
            </View>
            </View>
        </View>
        {
            SearchData.map((item)=>
                <View key={item.id} style={{backgroundColor:'white',marginLeft:10,borderRadius:5,elevation:5,width:140,padding:5}}>
        <Text style={{color:'black'}}>{item.title}</Text>
            <Image source={item.image} style={{width:'100%',height:130}}/>
            
        </View>
            )
        }
        
        </ScrollView>
      
    </View>
  )
}

export default Services

const styles = StyleSheet.create({
    img : {height:50,width:50,borderRadius:25},
    imgContainer : {alignItems:'center',paddingTop:10,padding:5},
    container : {marginTop:-20,paddingHorizontal:10},
    txt : {color:'black',fontSize:12}
})