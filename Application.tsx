import React from 'react';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import {NavigationContainer} from '@react-navigation/native';

import {Navigator} from './src/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
