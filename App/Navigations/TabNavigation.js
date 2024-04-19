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
    <Tab.Navigator screenOptions={{
      headerShown: false,
    }}>
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size}/>
            ),
          }}
         />
        <Tab.Screen name="Report" component={ReportScreen} 
        options={{
          tabBarLabel: 'Report',
          tabBarIcon: ({ color, size }) => (
            <Octicons name="report" color={color} size={size}/>
          ),
        }}/>
        <Tab.Screen name="Dashboard" component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="space-dashboard" color={color} size={size}/>
          ),
        }} />

    </Tab.Navigator>
  )
}