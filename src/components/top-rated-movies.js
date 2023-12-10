import { Dimensions, View ,StyleSheet, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

import Carousel from 'react-native-snap-carousel';


export default function TopRated() {
    const width = Dimensions.get('window').width;
    const [data, setData] = useState([]);


    useEffect(() => {
        async function getData() {
          try {
            const request = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f391c404d0c20bc7c6293f8cc766ee2e');
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
        <View>
            <ScrollView>
                <View style={{ flex: 1, paddingTop: '7%' }}>
                    <Carousel
                    data={data}
                    renderItem={renderItem}
                    sliderWidth={width}
                    itemWidth={width * 0.7}
                    firstItem={10}
                    slideStyle={{ display: 'flex' }}
                    inactiveSlideOpacity={0.2}
                    />
                </View>

            </ScrollView>
      </View>
    );

}


const style = StyleSheet.create({
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
  