import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import Problem from '../Components/Problem.js'

const { height } = Dimensions.get('window')

export default function ProblemScreen() {
  return (
    <View style={{backgroundColor:'white'}}>
      <Problem/>
    </View>
  )
}