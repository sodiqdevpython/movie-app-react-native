import { Dimensions, View, Button,StyleSheet, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';

import Carousel from 'react-native-snap-carousel';



export default function HomeScreen({ navigation }) {
  const width = Dimensions.get('window').width;
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const request = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=f391c404d0c20bc7c6293f8cc766ee2e');
        const response = await request.json();
        setData(response.results.map(movie => ({
          imageUrl: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
        })));
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={style.carouselItem}>
      <Image source={{ uri: item.imageUrl }} style={style.image} />
    </View>
  );

  return (
    <LinearGradient style={{ flex: 1, justifyContent: 'center' }} colors={['#33363b', '#1e293b', '#020617']}>
      <View style={style.home}>
        <StatusBar style='light' />
        <SafeAreaView style={{ height: 90 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Image style={style.logo} source={require('../../assets/logo.png')} />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', paddingRight: '10%' }}>
              <MagnifyingGlassIcon size={30} strokeWidth={3} color={'whitesmoke'} />
            </View>
          </View>
        </SafeAreaView>
        <ScrollView>
          <View style={{ flex: 1, paddingTop: '7%' }}>
            <Carousel
              data={data}
              renderItem={renderItem}
              sliderWidth={width}
              itemWidth={width * 0.7}
              firstItem={5}
              slideStyle={{ display: 'flex' }}
              inactiveSlideOpacity={0.2}
            />
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  home: {
    flex: 1,
  },
  logo: {
    width: 120,
    height: 80,
    resizeMode: 'contain',
    marginLeft: 20
  },
  carouselItem: {
    borderRadius: 20,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 410,
    resizeMode: 'cover'
  }
});
