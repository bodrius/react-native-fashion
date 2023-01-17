import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  PanResponder,
  PanResponderInstance,
} from 'react-native';

const AnimatedContainer = Animated.createAnimatedComponent(View);

const {width: DEVICE_WIDTH} = Dimensions.get('window');

export const FlatListSeparator = () => {
  const animatedBgColor = new Animated.Value(0);

  const backgroundColor = animatedBgColor.interpolate({
    inputRange: [0, 300],
    outputRange: ['black', 'yellow'],
  });

  const panResponder = React.useRef(PanResponder.create({}));

  return (
    <AnimatedContainer
      style={[
        styles.box,
        {
          backgroundColor,
        },
      ]}
      {...panResponder.panHandlers}>
      <View style={styles.screen} />
    </AnimatedContainer>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    // backgroundColor: 'red',
    position: 'relative',
  },

  screen: {
    flex: 1,
    backgroundColor: 'green',
    // position: 'absolute',
    // top: 990,
    // bottom: 0,
    // bottom: 200,
    // zIndex: 3,
    left: 200,
  },
});
