import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';

import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import {WebView} from 'react-native-webview';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Header from '../../components/header/header';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Header navigation={navigation} title="Home" />
        <View style={styles.mainCardView}>
          <View style={styles.cardHeader}>
            <View>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
                Verse of the Moment
              </Text>
              <Text style={{fontSize: 12, fontWeight: 'bold', color: '#000'}}>
                Surah Younus [2-2]
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{
                  paddingLeft: 10,
                  paddingRight: 10,
                }}>
                <Icon name="copy" size={20} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingLeft: 10,
                  paddingRight: 10,
                }}>
                <Icon name="share" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#fff',
              borderBottomWidth: 2,
            }}
          />
          <View style={{paddingTop: 10}}>
          <Text style={styles.arabicText}>ذٰلِکَ  الۡکِتٰبُ لَا رَیۡبَ ۚۖۛ فِیۡہِ ۚۛ ہُدًی  لِّلۡمُتَّقِیۡنَ ۙ﴿۲﴾</Text>
          </View>
          <View style={{paddingTop: 10, paddingBottom: 10}}>
            <Text style={styles.urduText}>
              یہ کتاب ( یعنی قرآن مجید )اس میں کچھ شک نہیں کہ اللہ کا کلام ہے۔
              پرہیزگاروں کے لیے رہنما ہے۔
            </Text>
          </View>
        </View>
        <View style={styles.mainCardView}>
          <View style={styles.cardHeader}>
            <View>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
                Hadith of the Moment
              </Text>
              <Text style={{fontSize: 12, fontWeight: 'bold', color: '#000'}}>
                Surah Younus [2-2]
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{
                  paddingLeft: 10,
                  paddingRight: 10,
                }}>
                <Icon name="copy" size={20} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingLeft: 10,
                  paddingRight: 10,
                }}>
                <Icon name="share" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#fff',
              borderBottomWidth: 2,
            }}
          />
          <View style={{paddingTop: 10}}>
            <Text style={styles.arabicText}>
              ذٰلِكَ الْكِتٰبُ لَا رَیْبَ١ۛۖۚ فِیْهِ١ۛۚ هُدًى لِّلْمُتَّقِیْنَۙ
            </Text>
          </View>
          <View style={{paddingTop: 10, paddingBottom: 10}}>
            <Text style={styles.urduText}>
              یہ کتاب ( یعنی قرآن مجید )اس میں کچھ شک نہیں کہ اللہ کا کلام ہے۔
              پرہیزگاروں کے لیے رہنما ہے۔
            </Text>
          </View>
        </View>
        <View style={styles.mainCardView}>
          <View style={styles.cardHeader}>
            <View>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
                Dua of the Moment
              </Text>
              <Text style={{fontSize: 12, fontWeight: 'bold', color: '#000'}}>
                Surah Younus [2-2]
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{
                  paddingLeft: 10,
                  paddingRight: 10,
                }}>
                <Icon name="copy" size={20} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingLeft: 10,
                  paddingRight: 10,
                }}>
                <Icon name="share" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#fff',
              borderBottomWidth: 2,
            }}
          />
          <View style={{paddingTop: 10}}>
            <Text style={styles.arabicText}>
              رَبَّنَآ اٰتِنَا فِي الدُّنْيَا حَسَنَةً وَّفِي الْاٰخِرَةِ
              حَسَـنَةً وَّقِنَا عَذَابَ النَّارِ
            </Text>
            <Text>
بِسۡمِ اللّٰہِ الرَّحۡمٰنِ الرَّحِیۡمِ</Text>
          </View>
          <View style={{paddingTop: 10, paddingBottom: 10}}>
            <Text style={styles.urduText}>
              اے اللہ! ہمیں دنیا میں بھلائی عطا کر اور آخرت میں بھلائی عطا کر
              اور ہمیں دوزخ سے بچا
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  arabicText: {
    textAlign: 'right',
    fontFamily: 'Noore-Huda',
    direction: 'rtl',
    fontSize: 24,
    color: '#000',
    paddingHorizontal: 16,
    letterSpacing: 2,
    lineHeight: 50,
  },
  urduText: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Nastaleeq',
    textAlign: 'right',
    paddingHorizontal: 16,
    lineHeight: 30,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 70,
  },
  mainCardView: {
    margin: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  cardHeader: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});
export default Home;
