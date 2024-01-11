import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
function HeaderTitle({navigation, title}) {
  return (
    <View style={styles.headerTitle}>
      <View style={styles.headerLeft}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon name="bars" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.headerRight}>
        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <Icon name="cog" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HeaderTitle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    flexDirection: 'row',
  },
  headerLeft: {
    padding: 10,
    justifyContent: 'center',
  },
  headerRight: {
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
