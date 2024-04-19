import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'

export default function Report({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View>
      <Text>Report</Text>
    </View>
  )
}