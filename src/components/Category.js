import { StyleSheet, Text, View,FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Fresh from '../images/fresh.jpeg'
import Deals from '../images/deals.png'
import Beauty from '../images/beauty.png'
import Mobiles from '../images/mobiles.jpeg'
import MiniTV from '../images/minitv.jpeg'
import Fashion from '../images/fashion.png'
import Prime from '../images/prime.jpeg'
import Electronics from '../images/electronics.jpeg'
import Home from '../images/home.jpeg'
import Travel from '../images/travel.jpeg'
import Furniture from '../images/furniture.png'
import Pharmacy from '../images/pharmacy.jpeg'
import Movies from '../images/movies.png'
import Books from '../images/books.jpeg'
import HomeAppliances from '../images/home-appliances.png'
import More from '../images/more.png'
import { useNavigation } from '@react-navigation/native'


const Category = () => {
    const navigation = useNavigation();
    const Categories = [
    { id: '1', image: Fresh, title: 'Fresh',},{ id: '2', image: Deals, title: 'Deals',},
    { id: '3', image: Beauty, title: 'Beauty',},{ id: '4', image: Mobiles, title: 'Mobiles',},
    { id: '5', image: MiniTV, title: 'miniTV',},{ id: '6', image: Fashion, title: 'Fashion',},
    { id: '7', image: Prime, title: 'Prime',},{ id: '8', image: Electronics, title: 'Electronics',},
    { id: '9', image: Home, title: 'Home', },{ id: '10', image: Travel,title: 'Travel',},
    { id: '11', image: Furniture,title: 'Furniture',},{ id: '12',image: Pharmacy,title: 'Pharmacy',},
    { id: '13',image: Movies,title: 'Movies',},{ id: '14',image: Books,title: 'Books, Toys',},
    { id: '15',image: HomeAppliances,title: 'Appliances',},{ id: '16', image: More, title: 'More', },
    ]
  return (
    <View>
      <FlatList data={Categories} horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item,index)=>index}
      renderItem={({item})=>
      <TouchableOpacity onPress={()=>navigation.navigate('ProductScreen', item)}>
      <View style={{backgroundColor:'white',paddingHorizontal:10,alignItems:'center'}}>
        <Image source={item.image} style={{height:50,width:50}}/>
        <Text>{item.title}</Text>
      </View>
      </TouchableOpacity>}/>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({})