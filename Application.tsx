import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import {Navigator} from './src/navigation';
import {RouteService} from './src/shared/services';

const App = () => {
  return (
    <NavigationContainer ref={RouteService.navigationRef}>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
