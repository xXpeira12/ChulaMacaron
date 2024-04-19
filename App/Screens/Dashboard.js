import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'

export default function Dashboard({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  )
}