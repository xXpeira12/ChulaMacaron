import { View, Text , Dimensions } from 'react-native'
import React, { useLayoutEffect } from 'react'

import GoogleMapView from '../Components/Home/GoogleMapView';


const { height } = Dimensions.get('window')

export default function Home({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={{backgroundColor:'#D5D5D5', height: height*0.5, justifyContent: 'center', alignItems: 'center'}}>

    </View>
  )
}