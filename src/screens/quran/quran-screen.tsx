import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../../components/header/header';

function Quran({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Header navigation={navigation} title="Quran" />
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('QuranTabs')}
            style={[
              {
                borderRadius: 10,
                flexDirection: 'column',
                backgroundColor: '#36454F',
                flex: 1,
                alignItems: 'center',
                margin: 4,
              },
            ]}>
            <View style={{padding: 20}}>
              <Image
                style={{width: 30, height: 30}}
                source={require('../../assets/images/icons/icons8-quran-60.png')}
                resizeMode="contain"
              />
            </View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                color: '#fff',
                marginBottom: 10,
              }}>
              Quran
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('QuranTabs')}
            style={[
              {
                borderRadius: 10,
                flexDirection: 'column',
                backgroundColor: '#36454F',
                flex: 1,
                alignItems: 'center',
                margin: 4,
              },
            ]}>
            <View style={{padding: 20}}>
              <Image
                style={{width: 30, height: 30}}
                source={require('../../assets/images/icons/icons8-quran-60.png')}
                resizeMode="contain"
              />
            </View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                color: '#fff',
                marginBottom: 10,
              }}>
              Mushaf
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default Quran;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 70,
  },
  mainCardView: {
    margin: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#233329',
  },
  cardHeader: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  containerGlue: {
    flex: 1,
    marginTop: '35%',
    flexDirection: 'column',
  },
  buttonContainer: {
    height: 350,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  logoStyle: {
    height: 150,
    width: 350,
  },
  rowStyle: {
    width: 350,
    alignSelf: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
  },
});
