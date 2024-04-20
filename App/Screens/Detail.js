import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Image, ScrollView ,Dimensions, TouchableOpacity} from 'react-native';
import Macaron from '../../assets/img/logo.png';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import AsyncStorage from "@react-native-async-storage/async-storage";

const screenHeight = Dimensions.get('window').height;

const statuses = ['waiting', 'inProgress', 'done'];

export default function Detail({ route }) {
  const { item } = route.params;
  const mapRef = useRef(null);

  const handlePress = async () => {
    const currentIndex = statuses.indexOf(item.status);
    const nextIndex = (currentIndex + 1) % statuses.length;
    const nextStatus = statuses[nextIndex];
    const updatedItem = { ...item, status: nextStatus };

    try {
      const allProblemString = await AsyncStorage.getItem("allProblem");
      if (allProblemString !== null) {
        const allProblemArray = JSON.parse(allProblemString);
        const updatedProblemArray = allProblemArray.map((problem) =>
          problem.id === updatedItem.id ? updatedItem : problem
        );
        await AsyncStorage.setItem(
          "allProblem",
          JSON.stringify(updatedProblemArray)
        );
      }
    } catch (error) {
      console.error("Error updating AsyncStorage:", error);
    }

    console.log('Button pressed!');
  };

  const [initialRegion, setInitialRegion] = useState({
    latitude: item.location.latitude,
    longitude: item.location.longitude
  });

  const moveCameraToInitialRegion = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion(initialRegion, 1000);
    }
  };

  useEffect(() => {
    moveCameraToInitialRegion();
  }, []);

  let text;
  if(item.status == 'waiting'){
    text = 'รอดำเนินการ'
  } else if(item.status == 'inProgress'){
    text = 'กำลังดำเนินการ'
  } else {
    text = 'เสร็จสิ้น'
  }

  return (
    <ScrollView style={{ backgroundColor:'white',padding:50, flex:1}}>
    <Text style={{ fontWeight: 'bold', fontSize: 30 ,paddingVertical:20,color:'#E26199', fontFamily: 'chulaBold' }}>รายละเอียด:</Text>
    <View style={{flexDirection:'column' ,borderWidth:2, borderColor:'#E26199',borderRadius:15,padding:10}}>
        <Image source={item.image} style={{ width: '100%',height:250, borderRadius: 8.6 }} />
        <View style={{}}>

        <Text style={{ fontWeight: 'bold', fontSize: 25 ,paddingTop:20,color:'#E26199', fontFamily: 'chulaBold' }}>{item.rootProblem}</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 20 ,paddingTop:0,color:'#E26199', fontFamily: 'chulaBold' }}>{item.detailProblem}</Text>
        <Text style={{ fontWeight: 'thin', fontSize: 20 ,paddingTop:10,color:'#E26199', fontFamily: 'chulaReg' }}>{item.detail}</Text>

{/* 
        <Text style={{ fontWeight: 'thin', fontSize: 20 ,paddingVertical:20,color:'gray' }}>{item.location.latitude}</Text>
        <Text style={{ fontWeight: 'thin', fontSize: 20 ,paddingBottom:20,color:'gray' }}>{item.location.longitude}</Text> */}

        {/* <Text style={{ fontWeight: 'bold', fontSize: 20 ,paddingBottom:20,color:'gray' }}>l{item.status}</Text> */}


        <View style={{height: screenHeight *0.25, borderRadius:9, alignItems:'center',justifyContent:'center',marginBottom:30}}>
  
          <MapView
              ref={mapRef}
              style={{
                width: "100%",
                height: Dimensions.get("screen").height * 0.23,
                borderRadius: 10,
              }}
              provider={PROVIDER_GOOGLE}
              initialRegion={initialRegion}>
            <Marker coordinate={item.location} title={item.rootProblem} description={item.detailProblem}></Marker>
          </MapView>
        </View>

        <TouchableOpacity 
  style={{height: 100, backgroundColor:'#E26199', borderRadius:9, alignItems:'center',justifyContent:'center'}}
  onPress={handlePress}
  disabled={item.status === 'done'}
>
  <Text style={{fontSize:30, fontWeight:'bold', color:'white'}}>{text}</Text>
</TouchableOpacity>
        </View>
  
    </View>
    <Image source={Macaron} style={{width:'100%', resizeMode:'center'}}></Image>
  </ScrollView>
  );
}