import { View, Image, StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

export default function Home({ navigation }) {
  return (
    <LinearGradient style={{flex: 1}} colors={['#33363b', '#1e293b' ,'#020617']}>
      <View style={style.head}>
        <SafeAreaView style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end'}}>
          <View style={{flex: 1, paddingLeft: '5%' }}>
            <Image source={require('../../assets/logo.png')} />
          </View>
          <View style={{flex: 1, alignItems: 'flex-end', paddingRight: '6%'}}>
            <AntDesign name="search1" size={32} color="white" />
          </View>
        </SafeAreaView>
      </View>
      
      <View style={style.body}>
        <ScrollView>
          
        </ScrollView>
      </View>
    </LinearGradient>
  )
}

const style = StyleSheet.create({
    head: {
        flex: 1
    },
    body: {
      flex: 10
    }
})