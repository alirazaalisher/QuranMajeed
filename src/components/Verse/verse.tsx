import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Verse = ({verse}) => {
  return (
    <View>
      <Text style={styles.arabicText}>{verse}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  arabicText: {
    fontFamily: 'AlQalamQuranMajeed2',
    color: 'red',
    fontSize: 30,
    textAlign: 'right',
    paddingHorizontal: 16,
    lineHeight: 40,
  },
});

export default Verse;
