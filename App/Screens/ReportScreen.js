import { View, Dimensions, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Report from '../Components/Report/report'

const { height } = Dimensions.get('window')

export default function ReportScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={{backgroundColor:'white'}}>
      <Report/>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
  },
})