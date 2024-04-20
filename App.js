import React , {useState}from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Dashboard from './App/Screens/Dashboard';
import Detail from './App/Screens/Detail';
import Home from './App/Screens/Home';
import ReportScreen from './App/Screens/ReportScreen';
import ProblemScreen from './App/Screens/ProblemScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

function NavigationButtons() {
  const navigation = useNavigation();

  const [focusedButton, setFocusedButton] = useState('Home');

  const handlePress = (screenName) => {
    setFocusedButton(screenName);
    navigation.navigate(screenName);
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', height:75, marginTop:15 }}>
    <TouchableOpacity onPress={() => handlePress('Home')} activeOpacity={0.7}>
      <Icon name="home-outline" size={30} color={focusedButton === 'Home' ? '#E26199' : '#000'} />
      <Text style={{ fontWeight: 'bold', color: focusedButton === 'Home' ? '#E26199' : '#000' }}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handlePress('ReportScreen')} activeOpacity={0.7}>
      <Icon name="document-text-outline" size={30} color={focusedButton === 'ReportScreen' ? '#E26199' : '#000'} />
      <Text style={{ fontWeight: 'bold', color: focusedButton === 'ReportScreen' ? '#E26199' : '#000' }}>Report</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handlePress('Dashboard')} activeOpacity={0.7}>
      <Icon name="analytics-outline" size={30} color={focusedButton === 'Dashboard' ? '#E26199' : '#000'} />
      <Text style={{ fontWeight: 'bold', color: focusedButton === 'Dashboard' ? '#E26199' : '#000' }}>Dashboard</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handlePress('ProblemScreen')} activeOpacity={0.7}>
      <Icon name="alert-circle-outline" size={30} color={focusedButton === 'ProblemScreen' ? '#E26199' : '#000'} />
      <Text style={{ fontWeight: 'bold', color: focusedButton === 'ProblemScreen' ? '#E26199' : '#000' }}>Problem</Text>
    </TouchableOpacity>
  </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
       
        <Stack.Navigator>
          <Stack.Screen name="ReportScreen" component={ReportScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="ProblemScreen" component={ProblemScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
        <NavigationButtons />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});