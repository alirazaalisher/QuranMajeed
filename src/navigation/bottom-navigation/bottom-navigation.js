import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Platform, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../../screens/home/home';
import Prayer from '../../screens/prayer/prayer';
import TopTabNavigator from '../top-navigation/top-navigation';
import Quran from '../../screens/quran/quran-screen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerTransparent: true,
        headerShadowVisible: false,
        tabBarScrollEnabled: true,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          display: 'flex',
          position: 'absolute',
          elevation: 5,
          backgroundColor: '#36454F',
          height: 70,
        },
        tabBarShowLabel: true,
        headerShown: false,
        headerTitleAlign: 'center',
        tabBarLabelStyle: {
          fontSize: 15,
          margin: 5,
          padding: 0,
        },
      })}>
      <Tab.Screen
        name="Quran"
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                top: Platform.OS === 'ios' ? 10 : 0,
              }}>
              <Image
                style={{width: 30, height: 30}}
                source={require('../../assets/images/icons/icons8-quran-60.png')}
                resizeMode="contain"
              />
            </View>
          ),
        }}
        component={Quran}
      />
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                top: Platform.OS === 'ios' ? -10 : -20,
                width: Platform.OS === 'ios' ? 50 : 60,
                height: Platform.OS === 'ios' ? 50 : 60,
                borderRadius: Platform.OS === 'ios' ? 25 : 30,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 30, height: 30}}
                source={require('../../assets/images/icons/home.png')}
                resizeMode="contain"
              />
            </View>
          ),
          tabBarIconStyle: {},
        }}
        component={Home}
      />
      <Tab.Screen
        name="Prayer"
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                top: Platform.OS === 'ios' ? 10 : 0,
              }}>
              <Image
                style={{width: 30, height: 30}}
                source={require('../../assets/images/icons/icons8-prayer-60.png')}
                resizeMode="contain"
              />
            </View>
          ),
        }}
        component={Prayer}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
