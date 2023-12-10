import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

const UpcomingMovies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const request = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=f391c404d0c20bc7c6293f8cc766ee2e');
        const response = await request.json();
        setData(response.results.map(movie => ({
          title: movie.original_title,
          imageUrl: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
        })));
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Movies</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.carouselItem}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.imageTitle}>{item.title.length > 12 
            ? item.title.slice(0, 12) + '...'
            : item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  title: {
    paddingLeft: '5%',
    color: '#bb353e',
    fontSize: 28,
    fontWeight: '800',
    paddingBottom: '5%',
  },
  scrollContainer: {
    paddingLeft: '5%',
  },
  carouselItem: {
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden', // Ensure the image is clipped to the rounded corners
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  imageTitle: {
    color: 'white',
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default UpcomingMovies;
