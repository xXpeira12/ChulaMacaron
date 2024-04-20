import { View, Text , Dimensions , Button,  TouchableOpacity ,ScrollView} from 'react-native'
import React, { useLayoutEffect } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'


const screenWidth = Dimensions.get('window').width;

const { height } = Dimensions.get('window')

export default function Home({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <ScrollView style={{backgroundColor:'white'}}>
    <View style={{backgroundColor:'white', padding:50}}>
     
    <Text style={{fontSize:30, textAlign:'center' , fontWeight:'bold' , paddingTop:15, color:'#E26199'}}>CHULA MACARON</Text>
    <Text style={{fontSize:16, textAlign:'center', fontWeight:'bold', color:'#E26199'}}>make Nisit's life better</Text>

    <View style={{flexDirection: screenWidth > 769 ? 'row' : 'column'}}>
    <View style={{width: screenWidth > 769 ? '50%' : '100%',}}>
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

    <View style={{flexDirection: screenWidth > 769 ? 'column':'column' , paddingTop:20 , width: screenWidth > 769 ? '50%' : '100%'}}>
      <Text style={{fontWeight:'bold',fontSize:25 , color:'#E26199', paddingBottom:20}}>OverView</Text>
  
      <View style={{
          width: '100%',
          height: Dimensions.get('screen').height*0.23,
          borderRadius: 20,
          flexDirection: 'row',
          backgroundColor: '#E26199',
          
        }}></View>
    </View>

    </View>
    <View style={{paddingTop:30}} >

    <View style={{height:100, width:'100%', borderRadius:10, backgroundColor: '#FF8C8C', marginTop:20, flexDirection: 'row', justifyContent: 'space-between'}}>
      <View>
        <Text style={{color:'white', padding:15, paddingBottom:10, fontSize:20, fontWeight:'bold'}}>รอรับเรื่อง</Text>
        <Text style={{color:'white', paddingLeft:15, fontSize:20, fontWeight:'bold'}}>123(100%)</Text>
      </View>
      <View style={{backgroundColor:'black', height:80 , width:80, marginHorizontal:15, marginVertical:10 , borderRadius:9}}></View>
    </View>

    <View style={{height:100, width:'100%', borderRadius:10, backgroundColor: '#FFDAAF',marginTop:20 , paddingBottom:10, flexDirection: 'row', justifyContent: 'space-between'}}>
      <View>
        <Text style={{color:'white', padding:15, fontSize:20, fontWeight:'bold'}}>ดำเนินการ</Text>
        <Text style={{color:'white', paddingLeft:15, fontSize:20, fontWeight:'bold'}}>123(100%)</Text>
      </View>
      <View style={{backgroundColor:'black', height:80 , width:80, marginHorizontal:15, marginVertical:10, borderRadius:9}}></View>
    </View>

    <View style={{height:100, width:'100%', borderRadius:10, backgroundColor: '#A1E0A7', marginTop:20, paddingBottom:10, flexDirection: 'row', justifyContent: 'space-between'}}>
      <View>
        <Text style={{color:'white', padding:15, fontSize:20, fontWeight:'bold'}}>เสร็จสิ้น</Text>
        <Text style={{color:'white', paddingLeft:15, fontSize:20, fontWeight:'bold'}}>123(100%)</Text>
      </View>
      <View style={{backgroundColor:'black', height:80 , width:80, marginHorizontal:15, marginVertical:10, borderRadius:9}}></View>
    </View>

</View>
    </View>

    </ScrollView>
  )
}