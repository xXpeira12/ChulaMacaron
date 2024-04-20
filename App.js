import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigation from './App/Navigations/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    'chulaReg' : require('./assets/fonts/CHULALONGKORNReg.otf'),
    'chulaBold' : require('./assets/fonts/CHULALONGKORNBold.otf'),
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded){
  //     await SplashScreen.hideAsync();
  //   }
  // },[fontsLoaded]);
 
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
      
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
  },
});
