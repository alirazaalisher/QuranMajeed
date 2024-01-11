import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import HeaderTitle from '../header-title/header-title';

function Header({navigation, title}) {
  return (
    <LinearGradient
      style={styles.gradientSection}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#233329', '#63D471']}>
      <HeaderTitle navigation={navigation} title={title} />
      <View
        style={{
          margin: 10,
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <Text style={{fontSize: 16, color: 'white'}}>Now</Text>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>
            Isha
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 10,
          }}>
          <Text style={{fontSize: 16, color: 'white'}}>Upcoming</Text>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>
            Fajar
          </Text>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>
            03:24 am
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexDirection: 'row',
          }}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, color: 'white'}}>
              16 Dhul-Hijja 14444
            </Text>
            <Text style={{fontSize: 16, color: 'white'}}>05 July 2023</Text>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, color: 'white'}}>
              <EvilIcons
                style={styles.searchIcon}
                name="location"
                size={20}
                color="#fff"
              />
              Punjab
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.searchSection}>
        <Icon style={styles.searchIcon} name="search" size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Search word or ayat in Quran"
          underlineColorAndroid="transparent"
        />
      </View>
    </LinearGradient>
  );
}
export default Header;

const styles = StyleSheet.create({
  gradientSection: {
    paddingBottom: 40,
    marginBottom: 40,
    position: 'relative',
  },
  searchSection: {
    position: 'absolute',
    bottom: -30,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#000',
    height: 45,
    margin: 10,
    marginTop: 10,
    borderWidth: 0.5,
    borderRadius: 20,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    marginRight: 10,
    marginLeft: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#fff',
    color: '#424242',
  },
});
