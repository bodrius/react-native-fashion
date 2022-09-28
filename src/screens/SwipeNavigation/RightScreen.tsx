import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

export const RightScreen = () => {
  return (
    <SharedElement id={'1'} style={{flex: 1}}>
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {backgroundColor: 'green', paddingHorizontal: 20, paddingTop: 70},
        ]}>
        <Image
          source={require('./3.jpg')}
          style={{
            width: 300,
            height: 500,
          }}
        />
      </View>
    </SharedElement>
  );
};
