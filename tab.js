import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Learning from './learn'
import Schedule from './schedule'
import Me from './front'
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const Tabnav = () => {
    return(
        <Tab.Navigator initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: '#000',
          headerShown:false
        }} >
            <Tab.Screen name='Home' component={Home} options={{
          tabBarIcon: () => (<AntDesign name="home" size={24} color="black" />          
          ),
        }} />
            <Tab.Screen name='Learning' component={Learning} options={{
          tabBarIcon: () => (<AntDesign name="book" size={24} color="black" />          
          ),
        }} />
            <Tab.Screen name='Schedule' component={Schedule} options={{
          tabBarIcon: () => (<AntDesign name="calendar" size={24} color="black" />          
          ),
        }} />
            <Tab.Screen name='Me' component={Me} options={{
                headerShown:false,
          tabBarIcon: () => (<AntDesign name="user" size={24} color="black" />          
          ),
        }} />
        </Tab.Navigator>
    )
}
export default Tabnav