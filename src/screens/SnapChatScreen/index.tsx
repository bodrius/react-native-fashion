import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import StoryComp from './Story';
import {SnapchatRoutes} from './Model';
import Snapchat, {stories} from './Snapchat';

export const assets = stories.map(story => [story.avatar, story.source]).flat();

const Stack = createSharedElementStackNavigator<SnapchatRoutes>();

const Navigator = () => (
  <Stack.Navigator
    detachInactiveScreens={false}
    mode="modal"
    screenOptions={{
      gestureEnabled: false,
      headerShown: false,
      cardOverlayEnabled: true,
      cardStyle: {backgroundColor: 'transparent'},
    }}>
    <Stack.Screen
      name="Snapchat"
      component={Snapchat}
      options={{
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="Story"
      component={StoryComp}
      sharedElements={route => {
        const {id} = route.params.story;
        return [id];
      }}
    />
  </Stack.Navigator>
);

export default Navigator;
