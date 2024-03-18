import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../Screens/Utils/Colors.js'
import HomeNavigation from "./HomeNavigation";

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:Colors.PRIMARY
    }}>
      <Tab.Screen name="home" component={HomeNavigation}
       options={{
        tabBarLabel:({color})=>(
          <Text style={{color:color,fontSize:12,marginTop:-7}}>
            Home</Text>
        ),
        tabBarIcon:({color,size})=>(
          <FontAwesome name="home" size={24} color={color}/>
        )
       }}
      />
      <Tab.Screen name="booking" component={BookingScreen} 
       options={{
        tabBarLabel:({color})=>(
          <Text style={{color:color,fontSize:12,marginTop:-7}}>
            Booking</Text>
        ),
        tabBarIcon:({color,size})=>(
          <FontAwesome name="bookmark" size={24} color={color}/>
        )
       }}/>
      <Tab.Screen name="profile" component={ProfileScreen} 
       options={{
        tabBarLabel:({color})=>(
          <Text style={{color:color,fontSize:12,marginTop:-7}}>
            Profile</Text>
        ),
        tabBarIcon:({color,size})=>(
          <FontAwesome name="user-circle" size={24} color={color} />
        )
       }}/>
    </Tab.Navigator>
  )
}