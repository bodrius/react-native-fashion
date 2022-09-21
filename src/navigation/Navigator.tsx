import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {routeData} from './routes';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      {routeData.map(route => (
        <Stack.Screen
          key={route.name}
          name={route.routeName}
          component={route.component}
          options={{
            headerTitle: route.name,
          }}
        />
      ))}
    </Stack.Navigator>
  );
};
