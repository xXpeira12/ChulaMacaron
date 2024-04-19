import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Header from '../Components/Home/header';

export default function Home({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View>
      <Header />
    </View>
  )
}