import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import BottomTabNavigator from '../bottom-navigation/bottom-navigation';
const Drawer = createDrawerNavigator();
import {
  View,
  Platform,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

function HeaderLeft({navigation}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.toggleDrawer()}
      style={styles.headerLeft}>
      <Icon name="bars" size={20} color="#fff" />
    </TouchableOpacity>
  );
}

function HeaderTitle({navigation}) {
  return (
    <View style={{flexDirection: 'row', marginRight: 15}}>
      <View style={{justifyContent: 'center'}}>
        <Icon name="angle-left" size={30} color="#1841c7" />
      </View>
      <View style={{flex: 1}}>
        <Image
          source={{
            uri: 'https://www.techup.co.in/wp-content/uploads/2020/03/techup_final_logo.png',
          }}
          style={{widith: 100, height: 60, resizeMode: 'contain'}}
        />
      </View>
      <View style={{justifyContent: 'center', padding: 5}}>
        <MaterialCommunityIcons name="cart" size={30} color="#1841c7" />
      </View>
    </View>
  );
}

function HeaderRight({navigation}) {
  return (
    <View style={{marginHorizontal: 10}}>
      <MaterialCommunityIcons name="cart" size={30} color="#1841c7" />
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Setting"
        icon={({focused, color, size}) => (
          <View
            style={{
              top: Platform.OS === 'ios' ? 10 : 0,
            }}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../../assets/images/icons/icons8-setting-60.png')}
              resizeMode="contain"
            />
          </View>
        )}
        onPress={() => {
          props.navigation.closeDrawer();
          props.navigation.navigate('Setting');
        }}
      />
    </DrawerContentScrollView>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={({navigation}) => ({
        headerShown: false,
        headerTransparent: true,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#551E18',
          height: 50,
        },
        headerLeft: () => <HeaderLeft navigation={navigation} />,
      })}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name=" "
        options={{
          title: undefined,
          drawerLabel: () => null,
          headerTransparent: true,
          drawerIcon: () => null,
          drawerItemStyle: {display: 'none'},
          headerRight: () => (
            <View style={styles.headerRight}>
              <Icon name="cog" size={20} color="#fff" />
            </View>
          ),
        }}
        component={BottomTabNavigator}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: '#551E18',
    fontWeight: '500',
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center',
  },
  drawerItemFocused: {
    backgroundColor: '#ba9490',
  },
});
