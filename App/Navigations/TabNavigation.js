import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import Dashboard from '../Screens/Dashboard';
import { MaterialIcons } from '@expo/vector-icons';
import ReportScreen from '../Screens/ReportScreen';

export default function TabNavigation() {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator 
    screenOptions={{
      headerShown: false,
      tabBarStyle: { height: 100},
  
    }}
    >
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={{ color: focused ? '#E26199' : 'gray' }}>Home</Text>
            ),
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color='#E26199' size={size}/>
            ),
          }}
         />
        <Tab.Screen name="Report" component={ReportScreen} 
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#E26199' : 'gray' }}>Home</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Octicons name="report" color='#E26199' size={size}/>
          ),
        }}/>
        <Tab.Screen name="Dashboard" component={Dashboard}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#E26199' : 'gray' }}>Home</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="space-dashboard" color='#E26199' size={size}/>
          ),
        }} />

    </Tab.Navigator>
  )
}