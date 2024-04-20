import { View, Text , Dimensions , Button,  TouchableOpacity ,ScrollView, Image} from 'react-native'
import React, { useLayoutEffect } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import Macaron from '../../assets/img/logo.png';

const screenWidth = Dimensions.get('window').width;

const { height } = Dimensions.get('window')

// Mock data repository
const mockData = [
  {picture:require('../../assets/img/peko.jpg'), header: 'Header 1', description: 'Description 1', location: 'Location 1' },
  { picture:require('../../assets/img/peko.jpg'),header: 'Header 2', description: 'Description 2', location: 'Location 2' },
  { picture:require('../../assets/img/peko.jpg'),header: 'Header 3', description: 'Description 3', location: 'Location 3' },
  { picture:require('../../assets/img/peko.jpg'),header: 'Header 4', description: 'Description 4', location: 'Location 4' },
  // Add more items as needed
];

export default function Home({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <ScrollView style={{backgroundColor:'white'}}>
    <View style={{backgroundColor:'white', padding:50}}>
     
    <View style={{flexDirection: screenWidth > 769 ? 'row' : 'column'}}>
    <View style={{width: screenWidth > 769 ? '100%' : '100%',}}>

    <View style= {{paddingVertical:20}}>
      <Text style= {{fontWeight:'bold' , color:'#E26199' ,fontSize:25}}>รายงานทั้งหมด</Text>
    </View>

    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

    <TouchableOpacity onPress={() => {}}  style={{backgroundColor:'white', borderColor:'#E26199' , width:'47.5%', height:40, borderWidth:2, borderRadius:9 , paddingRight:'5%'}}></TouchableOpacity>
    <TouchableOpacity  onPress={() => {}}style={{backgroundColor:'white', borderColor:'#E26199' , width:'47.5%', height:40, borderWidth:2, borderRadius:9}}></TouchableOpacity>

    </View>


    {mockData.map((item, index) => (
      <View key={index} style={{paddingVertical: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{item.header}</Text>
        <Text style={{fontSize: 16}}>{item.description}</Text>
        <Text style={{fontSize: 16}}>{item.location}</Text>
        <Image source={item.picture} style={{width: 100, height: 100}} />
      </View>
    ))}

    </View>
    </View>

    <Image source={Macaron} style={{width:'100%', resizeMode:'center'}}></Image>
    </View>
    </ScrollView>
  )
}