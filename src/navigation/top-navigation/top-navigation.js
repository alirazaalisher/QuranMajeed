import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ParahListView from '../../screens/parah-list-view/parah-list-view';
import SurahListView from '../../screens/surah-list-view/surah-list-view';

const Tab = createMaterialTopTabNavigator();


function MushafTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Surah" component={SurahListView} />
      <Tab.Screen name="Parah" component={ParahListView} />
    </Tab.Navigator>
  );
}

function TopTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Surah" component={SurahListView} />
      <Tab.Screen name="Parah" component={ParahListView} />
    </Tab.Navigator>
  );
}

export default TopTabNavigator;
