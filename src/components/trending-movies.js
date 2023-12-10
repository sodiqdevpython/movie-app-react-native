import { Dimensions, View ,StyleSheet, Image, ScrollView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Loader from '../components/loader';
import Carousel from 'react-native-snap-carousel';


export default function TrendingMovies() {
    const width = Dimensions.get('window').width;
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        async function getData() {
          try {
            const request = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=f391c404d0c20bc7c6293f8cc766ee2e');
            const response = await request.json();
            setData(response.results.map(movie => ({
              imageUrl: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
            })));
            setIsLoading(false);
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

        
      function Loading() {
        if (isLoading) {
          return (
            <View>
              {Loader()}
            </View>
          );
        }
        else {
          return (
            <Carousel
                    data={data}
                    renderItem={renderItem}
                    sliderWidth={width}
                    itemWidth={width * 0.7}
                    firstItem={10}
                    slideStyle={{ display: 'flex' }}
                    inactiveSlideOpacity={0.2}
              />
          );
        }
      }

    return (
        <View>
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
                    {Loading()}
                </View>

            </ScrollView>
      </View>
    );

}


const style = StyleSheet.create({
    logo: {
      width: 120,
      height: 80,
      resizeMode: 'contain',
      marginLeft: 20
    },
    carouselItem: {
      borderRadius: 30,
      overflow: 'hidden' //! rasmni burchagini o'tmasroq qilish uchun .
    },
    image: {
      width: '100%',
      height: 410,
      resizeMode: 'cover'
    }
  });
  