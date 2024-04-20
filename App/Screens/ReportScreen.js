import { View, Text, Dimensions } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import * as Location from "expo-location";

export default function Report({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const [initialRegion, setInitialRegion] = useState(null);
  
  useEffect(() => {
    const getLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        
        if (status !== "granted") {
          setLocationError("Location permission denied");
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});

        setInitialRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001
        });
      } catch(error) {
        console.error("Error requesting location permission:", error);
      }
    };

    getLocation();
  }, []);

  const handleRegionChange = (region) => {
    const { latitude, longitude } = region;
    const newCoordinate = {
      latitude,
      longitude
    };
    setInitialRegion(newCoordinate);
  };

  return (
    <View style={{alignItems:'center', padding: 50}}>
      <Text>Report</Text>
      <MapView 
        style={{
          width: Dimensions.get('screen').width*0.89,
          height: Dimensions.get('screen').height*0.23,
          borderRadius: 20
        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={true}
        initialRegion={initialRegion}
        onRegionChange={handleRegionChange}>
        
        <Marker
          coordinate={initialRegion}
          anchor={{ x: 0.5, y: 0.9 }}
          style={{ zIndex: 999 }}>
        </Marker>

      </MapView>
    </View>
  )
}