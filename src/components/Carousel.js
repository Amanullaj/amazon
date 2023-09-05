import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React,{useRef,useState} from 'react'
import CarouselSlide ,{Pagination}from 'react-native-snap-carousel';

const sliderWidth = Dimensions.get('screen').width;

const Carousel = () => {
    const carouselRef = useRef();
    const [activeSlide,setActiveSlide] = useState(0);
    const Data = [{id:1,image:require('../images/slider1.jpeg')},{id:2,image:require('../images/slider2.jpeg')},
    {id:3,image:require('../images/slider3.jpeg')},{id:4,image:require('../images/slider4.jpeg')},
    {id:5,image:require('../images/slider5.jpeg')},{id:6,image:require('../images/slider6.png')},
    {id:7,image:require('../images/slider7.jpeg')},{id:8,image:require('../images/slider8.jpeg')}]
    renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Image source={item.image} style={{height:250,width:'100%'}}/>
            </View>
        );
    }
  return (
    <View style={styles.container}>
      
      <CarouselSlide
              ref={carouselRef}
              data={Data}
              renderItem={renderItem}
              sliderWidth={sliderWidth}
              itemWidth={500}
              onSnapToItem={index=>setActiveSlide(index)}
              />
            <Pagination
              dotsLength={Data.length}
              activeDotIndex={activeSlide}
              containerStyle={styles.view}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8,
                  
              }}
              inactiveDotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8,
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              dotColor = "white"
              inactiveDotColor = "white"
            />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    container : {position:'relative'},
    view : {position:'absolute',bottom:0,left:'5%'}
})