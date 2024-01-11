import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const Setting = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            This is the Setting screen
          </Text>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              color: 'green',
              marginBottom: 16,
              fontFamily: 'Noore-Huda',
            }}>
            {'\u{FD3E}'} ١٩٦ {'\u{FD3F}'}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Setting;
