import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import {Routes} from './routes';
import {
  PanGestureScreen,
  HomeScreen,
  MainScreen,
  RightScreen,
  VideoVerticalCarouselScreen,
  VideoHorizontalCarouselScreen,
} from '../screens';
import SnapChatStack from '../screens/SnapChatScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        cardOverlayEnabled: true,
        cardStyle: {backgroundColor: 'transparent'},
      }}>
      <Stack.Screen
        name={Routes.HOME_SCREEN}
        component={HomeScreen}
        options={{
          headerTitle: Routes.HOME_SCREEN,
        }}
      />

      <Stack.Screen
        name={Routes.PAN_GESTURE}
        component={PanGestureScreen}
        options={{
          headerTitle: Routes.PAN_GESTURE,
        }}
      />

      <Stack.Screen
        name={Routes.SNAP_CHAT_SCREEN}
        component={SnapChatStack}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={Routes.SWIPE_STACK}
        component={SwipeNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={Routes.VIDEO_VERTICAL_SCREEN}
        component={VideoVerticalCarouselScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={Routes.VIDEO_HORIZONTAL_SCREEN}
        component={VideoHorizontalCarouselScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const SharedStack = createSharedElementStackNavigator();

export const SwipeNavigator = () => (
  <SharedStack.Navigator
    detachInactiveScreens={false}
    mode="card"
    screenOptions={{
      gestureEnabled: true,
      headerShown: false,
      cardOverlayEnabled: true,
      cardStyle: {backgroundColor: 'transparent'},
    }}>
    <SharedStack.Screen
      name={Routes.SWIPE_SCREEN}
      component={MainScreen}
      options={{
        headerShown: true,
      }}
    />
    <SharedStack.Screen
      name={Routes.RIGHT_SWIPE_SCREEN}
      component={RightScreen}
      sharedElements={route => {
        return ['1'];
      }}
    />
  </SharedStack.Navigator>
);
