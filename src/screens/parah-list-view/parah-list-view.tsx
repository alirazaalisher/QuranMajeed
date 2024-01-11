import * as React from 'react';
import {
  Button,
  FlatList,
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import Card from '../../components/card/card';
import Parah from '../parah/parah';
const parahList = [
  {
    number: 1,
    name: 'آلم',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 1,
      name: 'Al-Fatiha',
    },
    end: {
      verse: 141,
      name: 'Al-Baqara',
    },
  },
  {
    number: 2,
    name: 'سَيَقُولُ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 3,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 4,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 5,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 6,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 7,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 8,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 9,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 10,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 11,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 12,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 13,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 14,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 15,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 16,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 17,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 18,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 19,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 20,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 21,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 22,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 23,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 24,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 25,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 26,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 27,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 28,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 29,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
  {
    number: 30,
    name: ' تِلْكَ الرُّسُلُ ',
    transliteration: 'Alif Lam Meem',
    numberOfAyahs: 148,
    ayahs: [],
    surahs: [],
    start: {
      verse: 142,
      name: 'Al-Baqara',
    },
    end: {
      verse: 253,
      name: 'Al-Baqara',
    },
  },
];

const ParahListView = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Parah />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: '#ffffff',
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
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

export default ParahListView;
