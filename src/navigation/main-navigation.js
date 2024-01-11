import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DrawerNavigator from './drawer-navigation/drawer-navigation';
import Surah from '../screens/surah/surah';
import Setting from '../screens/setting/setting';
import TopTabNavigator from './top-navigation/top-navigation';
const Stack = createNativeStackNavigator();
import {StatusBar} from 'react-native';

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="DrawerNavigator"
          options={{headerShown: false}}
          component={DrawerNavigator}
        />
        <Stack.Screen
          options={({route}) => ({title: route.params.surahTitle})}
          name="SurahView"
          component={Surah}
        />
        <Stack.Screen
          name="Setting"
          options={{
            icon: 'address-book',
            category: 'dashboard',
          }}
          component={Setting}
        />
        <Stack.Screen
          options={{
            title: 'Quran',
          }}
          name="QuranTabs"
          component={TopTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
