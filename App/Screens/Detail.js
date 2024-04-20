import React from 'react';
import { View, Text, Image, ScrollView ,Dimensions, TouchableOpacity} from 'react-native';
import Macaron from '../../assets/img/logo.png';

const screenHeight = Dimensions.get('window').height;

export default function Detail({ route }) {
  const { item } = route.params;
  const handlePress = () => {
    console.log('Button pressed!');
  };
  return (
    <ScrollView style={{ backgroundColor:'white',padding:50, flex:1}}>
    <Text style={{ fontWeight: 'bold', fontSize: 40 ,paddingBottom:20,color:'#E26199' }}>{item.header}</Text>
    <View style={{flexDirection:'column' ,borderWidth:2, borderColor:'#E26199',borderRadius:15,padding:10}}>
        <Image source={item.picture} style={{ width: '100%',height:250, borderRadius: 8.6 }} />
        <View style={{}}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', paddingTop:15,color:'#E26199' }}>{item.location}</Text>
        <Text style={{ fontSize: 20 ,color:'#E26199' ,paddingBottom:15}}>{item.description}</Text>


        <View style={{height: screenHeight *0.25, backgroundColor:'#E26199', borderRadius:9, alignItems:'center',justifyContent:'center',marginBottom:30}}>
          <Text style={{fontSize:30, fontWeight:'bold', color:'white'}}>googleMap</Text>
        </View>

        <TouchableOpacity 
  style={{height: 100, backgroundColor:'#E26199', borderRadius:9, alignItems:'center',justifyContent:'center'}}
  onPress={handlePress}
>
  <Text style={{fontSize:30, fontWeight:'bold', color:'white'}}>เริ่มดำเนินการ</Text>
</TouchableOpacity>
        </View>
  
    </View>
    <Image source={Macaron} style={{width:'100%', resizeMode:'center'}}></Image>
  </ScrollView>
  );
}