import { View, Text , Dimensions , Button,  TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Header from '../Components/Home/header';

const screenWidth = Dimensions.get('window').width;

const { height } = Dimensions.get('window')

export default function Home({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={{backgroundColor:'white', padding:50}}>
     
    <Text style={{fontSize:30, textAlign:'center' , fontWeight:'bold' , paddingTop:15, color:'#E26199'}}>Chula Macaron</Text>
    <Text style={{fontSize:16, textAlign:'center', fontWeight:'bold', color:'#E26199'}}>make Nisit's life better</Text>

    <View style={{flexDirection: screenWidth > 769 ? 'row' : 'column'}}>
    <View style={{
        width: screenWidth > 769 ? '50%' : '100%',
        }}>
    <Text style= {{paddingTop:20, color:'#E26199'}}>You can report any problems around Chulalongkorn University.</Text>
    <View style= {{paddingTop:20}}>
      <Text style= {{fontWeight:'bold' , color:'#E26199' ,fontSize:25}}>แพลตฟอร์ม</Text>
      <Text style= {{fontWeight:'bold' , color:'#E26199' ,fontSize:25, paddingBottom:10}}>แจ้งและจัดการปัญหาในจุฬา</Text>
    </View>
    <TouchableOpacity onPress={() => {}} style={{ backgroundColor: '#E26199', padding: 20, alignItems: 'center',  borderRadius: 10 ,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: screenWidth > 769 ? '40%' : '100%',
  }}>
    <Text style={{ color: 'white' }}>แจ้งปัญหาได้ที่นี่ (Click Here)</Text>
    </TouchableOpacity>
    </View>

    <View style={{flexDirection: screenWidth > 769 ? 'column' : 'row' , paddingTop:20}}>
      <Text style={{fontWeight:'bold',fontSize:25 , color:'#E26199'}}>OverView</Text>
    </View>
    </View>
    </View>
  )
}