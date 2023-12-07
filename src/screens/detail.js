import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Detail({ navigation }) {
  return (
    <View style={style.main}>
      <Text>Detail</Text>
      <Button
        title="Home ga o'tish"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#242526',
        justifyContent: 'center',
        alignItems: 'center'
    }
})