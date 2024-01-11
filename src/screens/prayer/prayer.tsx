import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../../components/header/header';
import Icon from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

function Prayer({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Header navigation={navigation} title="Prayer" />
        <View style={styles.prayerCard}>
          <View style={styles.prayerTimeItem}>
            <View>
              <Text style={styles.text}>Fajar</Text>
            </View>
            <View style={styles.timeItem}>
              <View style={styles.prayerTime}>
                <Text style={styles.text}>03:24 am</Text>
              </View>
              <View style={styles.notificationIcon}>
                <EvilIcons name="bell" size={20} color="#fff" />
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#F5FCFF',
              borderBottomWidth: 2,
            }}
          />
          <View style={styles.prayerTimeItem}>
            <View>
              <Text style={styles.text}>Sunrise</Text>
            </View>
            <View style={styles.timeItem}>
              <View style={styles.prayerTime}>
                <Text style={styles.text}>05:03 am</Text>
              </View>
              <View style={styles.notificationIcon}>
                <EvilIcons name="bell" size={20} color="#fff" />
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#F5FCFF',
              borderBottomWidth: 2,
            }}
          />
          <View style={styles.prayerTimeItem}>
            <View>
              <Text style={styles.text}>Zuhar</Text>
            </View>
            <View style={styles.timeItem}>
              <View style={styles.prayerTime}>
                <Text style={styles.text}>12:07 pm</Text>
              </View>
              <View style={styles.notificationIcon}>
                <EvilIcons name="bell" size={20} color="#fff" />
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#F5FCFF',
              borderBottomWidth: 2,
            }}
          />
          <View style={styles.prayerTimeItem}>
            <View>
              <Text style={styles.text}>Asr</Text>
            </View>
            <View style={styles.timeItem}>
              <View style={styles.prayerTime}>
                <Text style={styles.text}>05:02 pm</Text>
              </View>
              <View style={styles.notificationIcon}>
                <EvilIcons name="bell" size={20} color="#fff" />
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#F5FCFF',
              borderBottomWidth: 2,
            }}
          />
          <View style={styles.prayerTimeItem}>
            <View>
              <Text style={styles.text}>Maghrib</Text>
            </View>
            <View style={styles.timeItem}>
              <View style={styles.prayerTime}>
                <Text style={styles.text}>07:11 pm</Text>
              </View>
              <View style={styles.notificationIcon}>
                <EvilIcons name="bell" size={20} color="#fff" />
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#F5FCFF',
              borderBottomWidth: 2,
            }}
          />
          <View style={styles.prayerTimeItem}>
            <View>
              <Text style={styles.text}>Ishaa</Text>
            </View>
            <View style={styles.timeItem}>
              <View style={styles.prayerTime}>
                <Text style={styles.text}>08:43 pm</Text>
              </View>
              <View style={styles.notificationIcon}>
                <EvilIcons name="bell" size={20} color="#fff" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Prayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 70,
  },
  prayerCard: {
    margin: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#233329',
  },
  prayerTimeItem: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
  notificationIcon: {
    color: '#fff',
    paddingLeft: 10,
  },
  timeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

});
