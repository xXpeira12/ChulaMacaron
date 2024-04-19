import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Dashboard from '../Screens/Dashboard';
import ReportScreen from '../Screens/ReportScreen';

export default function TabNavigation() {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
    }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Report" component={ReportScreen} />
        <Tab.Screen name="Dashboard" component={Dashboard} />

    </Tab.Navigator>
  )
}