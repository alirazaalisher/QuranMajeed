import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';
import Verse from '../../components/Verse/verse';

const Surah = ({navigation}) => {
  const verse = 'ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًۭى لِّلْمُتَّقِينَ';

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            backgroundColor: '#fff',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Verse verse={verse}></Verse>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Surah;
