import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import Dashboard from '../Screens/Dashboard';
import { MaterialIcons } from '@expo/vector-icons';
import ReportScreen from '../Screens/ReportScreen';
import ProblemScreen from '../Screens/ProblemScreen';

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
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons name="home" size={size} color={focused ? '#E26199' : 'gray'}/>
            ),
          }}
         />
         <Tab.Screen name="Problem" component={ProblemScreen} 
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#E26199' : 'gray' }}>Problem</Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="information-circle-sharp" size={30} color={focused ? '#E26199' : 'gray'} />
          ),
        }}/>
        <Tab.Screen name="Report" component={ReportScreen} 
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#E26199' : 'gray' }}>Report</Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <Octicons name="report" color={focused ? '#E26199' : 'gray'} size={25}/>
          ),
        }}/>
        <Tab.Screen name="Dashboard" component={Dashboard}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#E26199' : 'gray' }}>Dashboard</Text>
          ),
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons name="space-dashboard" color={focused ? '#E26199' : 'gray'} size={size}/>
          ),
        }} />

    </Tab.Navigator>
  )
}