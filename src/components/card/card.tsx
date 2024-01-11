import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

const Card = (item, index) => {
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View style={styles.mainCardView}>
        <View
          style={{
            height: 25,
            backgroundColor: 'green',
            borderWidth: 0,
            width: 25,
            marginRight: -26,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
          }}>
          <Text style={{color: '#fff'}}>{item.id}</Text>
        </View>
        <View
          style={{
            width: '85%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              marginTop: 4,
              borderWidth: 0,
            }}>
            <Text
              style={{
                fontSize: 14,
                color: '#000',
                fontWeight: 'bold',
                textTransform: 'capitalize',
              }}>
              {item.transliteration}
            </Text>
            <Text
              style={{
                color: '#36454F',
                fontSize: 12,
              }}>
              Verses {item.total_verses}, {item.type}
            </Text>
          </View>
          <View
            style={{
              marginTop: 4,
              borderWidth: 0,
            }}>
            <Text
              style={{
                fontSize: 14,
                color: '#000',
                fontWeight: 'bold',
              }}>
              {item.name}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  mainCardView: {
    height: 90,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    shadowColor: '#36454F',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  subCardView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#36454F',
    borderColor: '#36454F',
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Card;
