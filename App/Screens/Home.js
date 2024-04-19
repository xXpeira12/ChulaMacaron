import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'

export default function Home({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}