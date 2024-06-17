import React from 'react';
import {View} from 'react-native';
import CountScreen from './screens/CountScreen';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <CountScreen />
    </View>
  );
};

export default App;