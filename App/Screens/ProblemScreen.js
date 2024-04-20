import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import Problem from '../Components/Problem.js'

const { height } = Dimensions.get('window')

export default function ProblemScreen() {
  return (
    <View style={{backgroundColor:'#D5D5D5', height: height*0.5, justifyContent: 'center', alignItems: 'center'}}>
      <Problem/>
    </View>
  )
}