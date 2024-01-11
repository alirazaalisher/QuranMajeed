import React, {useState} from 'react';

import {
  Button,
  View,
  Text,
  SafeAreaView,
  Platform,
  StyleSheet,
  Dimensions,
} from 'react-native';

const Parah = () => {
  let sspdf = null;
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
});

export default Parah;
