import { StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
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

const style = StyleSheet.create({
  logo: {
    width: 120,
    height: 80,
    resizeMode: 'contain',
    marginLeft: 20
  }
})