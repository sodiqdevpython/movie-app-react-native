import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, View } from 'react-native';
import UpcomingMovies from '../components/upcoming-movies';
import TrendingMovies from '../components/trending-movies';
import TopRated from '../components/top-rated-movies';
import PopularMovies from '../components/popular-movies';
import Loader from '../components/loader';
export default function HomeScreen({ navigation }) {

  return (
    // <LinearGradient style={{ flex: 1, justifyContent: 'center' }} colors={['#33363b', '#1e293b', '#020617']}>
      <View style={{flex: 1, backgroundColor: '#0f172a'}}>
        <ScrollView>
          <View style={{flex: 2}}>
            <TrendingMovies />
          </View>
          
          <View style={{flex: 1, marginTop: '10%'}}>
            <UpcomingMovies />
          </View>
          <PopularMovies />
          <TopRated />
        </ScrollView>
        
      </View>
      
    // </LinearGradient>
  );
}