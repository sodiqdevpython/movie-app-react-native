import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home({ navigation }) {
  return (
    <View style={style.main}>
      <Text>Home</Text>
      <Button
        title="Detail ga o'tish"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#282a36',
        justifyContent: 'center',
        alignItems: 'center'
    }
})