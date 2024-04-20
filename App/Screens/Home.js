import { View, Text , Dimensions , Button,  TouchableOpacity ,ScrollView , Image} from 'react-native'
import React, { useLayoutEffect } from 'react'

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import Macaron from '../../assets/img/logo.png';


const screenWidth = Dimensions.get('window').width;

const { height } = Dimensions.get('window')

export default function Home({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <ScrollView style={{backgroundColor:'white'}}>
    <View style={{backgroundColor:'white', padding:50}}>
     

    <Image source={Macaron} style={{width:'100%', resizeMode:'center'}}></Image>
    <Text style={{fontSize:30, textAlign:'center' ,fontFamily: 'chulaBold' , paddingTop:0, color:'#E26199'}}>CHULA MACARON</Text>
    <Text style={{fontSize:16, textAlign:'center', fontFamily: 'chulaReg', color:'#E26199'}}>make Nisits' lives better</Text>

    <View style={{flexDirection: screenWidth > 769 ? 'row' : 'column'}}>
    <View style={{width: screenWidth > 769 ? '50%' : '100%',}}>
    {/* <Text style= {{paddingTop:20, color:'#E26199', fontFamily: 'chulaBold'}}>You can report any problems around Chulalongkorn University.</Text> */}

    <View style= {{paddingTop:20}}>
      <Text style= {{fontFamily: 'chulaBold' , color:'#E26199' ,fontSize:25}}>แพลตฟอร์ม</Text>
      <Text style= {{fontFamily: 'chulaBold' , color:'#E26199' ,fontSize:25, paddingBottom:10}}>แจ้งและจัดการปัญหาในจุฬา</Text>
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
    <Text style={{ color: 'white', fontFamily: 'chulaBold', fontSize: 18 }}>แจ้งปัญหาได้ที่นี่ (Click Here)</Text>
    </TouchableOpacity>
    </View>

    <View style={{flexDirection: screenWidth > 769 ? 'column':'column' , paddingTop:20 , width: screenWidth > 769 ? '50%' : '100%'}}>
      <Text style={{fontFamily: 'chulaBold' ,fontSize:25 , color:'#E26199', paddingBottom:10}}>Overview</Text>
  
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
        <Text style={{color:'white', padding:15, paddingBottom:10, fontSize:20, fontFamily: 'chulaBold'}}>รอรับเรื่อง</Text>
        <Text style={{color:'white', paddingLeft:15, fontSize:20, fontFamily: 'chulaBold'}}>123(100%)</Text>
      </View>
      <View style={{backgroundColor:'black', height:80 , width:80, marginHorizontal:15, marginVertical:10 , borderRadius:9}}></View>
    </View>

    <View style={{height:100, width:'100%', borderRadius:10, backgroundColor: '#FFDAAF',marginTop:20 , paddingBottom:10, flexDirection: 'row', justifyContent: 'space-between'}}>
      <View>
        <Text style={{color:'white', padding:15, fontSize:20, fontFamily: 'chulaBold'}}>ดำเนินการ</Text>
        <Text style={{color:'white', paddingLeft:15, fontSize:20, fontFamily: 'chulaBold'}}>123(100%)</Text>
      </View>
      <View style={{backgroundColor:'black', height:80 , width:80, marginHorizontal:15, marginVertical:10, borderRadius:9}}></View>
    </View>

    <View style={{height:100, width:'100%', borderRadius:10, backgroundColor: '#A1E0A7', marginTop:20, paddingBottom:10, flexDirection: 'row', justifyContent: 'space-between'}}>
      <View>
        <Text style={{color:'white', padding:15, fontSize:20, fontFamily: 'chulaBold'}}>เสร็จสิ้น</Text>
        <Text style={{color:'white', paddingLeft:15, fontSize:20, fontFamily: 'chulaBold'}}>123(100%)</Text>
      </View>
      <View style={{backgroundColor:'black', height:80 , width:80, marginHorizontal:15, marginVertical:10, borderRadius:9}}></View>
    </View>

</View>

    <View style={{paddingTop:40}}>
      <Text style={{fontFamily: 'chulaBold', fontSize:25, color:'#E26199'}}>ปัญหาที่รับแจ้ง: </Text>
      <View style={{paddingTop:8, flexDirection:'row'}}>
        <View style={{width: '50%'}}>
      <Text style={{fontFamily: 'chulaBold', fontSize:20, color:'#E26199',paddingTop:10}}>ถนน</Text>
      <Text style={{fontFamily: 'chulaBold', fontSize:20, color:'#E26199',paddingTop:10}}>ความสะอาด</Text>
      <Text style={{fontFamily: 'chulaBold', fontSize:20, color:'#E26199',paddingTop:10}}>การจราจร</Text>
      <Text style={{fontFamily: 'chulaBold', fontSize:20, color:'#E26199',paddingTop:10}}>ไฟฟ้า</Text>
      <Text style={{fontFamily: 'chulaBold', fontSize:20, color:'#E26199',paddingTop:10}}>น้ำท่วม</Text>
      <Text style={{fontFamily: 'chulaBold', fontSize:20, color:'#E26199',paddingTop:10}}>ต้นไม้</Text>
      <Text style={{fontFamily: 'chulaBold', fontSize:20, color:'#E26199',paddingTop:10}}>ทางเท้า</Text>
      <Text style={{fontFamily: 'chulaBold', fontSize:20, color:'#E26199',paddingTop:10}}>เสียงรบกวน</Text>
      </View>
      <View style={{width: '50%'}}>
      <Text style={{fontFamily: 'chulaBold', fontSize:20, color:'#E26199',paddingTop:10}}>อุปกรณ์เสียหาย</Text>
      <Text style={{fontFamily: 'chulaBold', fontSize:20, color:'#E26199',paddingTop:10}}>อาคารชำรุด</Text>
      <Text style={{fontFamily: 'chulaBold', fontSize:20, color:'#E26199',paddingTop:10}}>สายสื่อสาร</Text>
      <Text style={{fontFamily: 'chulaBold', fontSize:20, color:'#E26199',paddingTop:10}}>ฝาท่อระบายน้ำ</Text>
      <Text style={{fontFamily: 'chulaBold', fontSize:20, color:'#E26199',paddingTop:10}}>กลิ่นควัน</Text>
      <Text style={{fontFamily: 'chulaBold', fontSize:20, color:'#E26199',paddingTop:10}}>สัตว์</Text>
      <Text style={{fontFamily: 'chulaBold', fontSize:20, color:'#E26199',paddingTop:10}}>น้ำประปา</Text>
      <Text style={{fontFamily: 'chulaBold', fontSize:20, color:'#E26199',paddingTop:10}}>อื่นๆ</Text>
      </View>
      
      </View>
  

    </View>
      
    </View>



    </ScrollView>
  )
}