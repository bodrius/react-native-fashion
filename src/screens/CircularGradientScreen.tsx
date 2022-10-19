import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';
import {useTiming} from 'react-native-redash';

import {CircularGradient} from './CircularGradient';

const {Clock} = Animated;

export const CircularGradientScreen = () => {
  const clock = new Clock();
  //   const timing = useTiming();

  const config = {
    duration: 10 * 1000,
    toValue: 1,
    easing: Easing.linear,
  };

  return (
    <View style={styles.container}>
      <CircularGradient progress={0.5} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
