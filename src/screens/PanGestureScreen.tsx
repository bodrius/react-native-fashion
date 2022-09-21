import Animated, {
  withDecay,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import React, {useState} from 'react';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {View, StyleSheet, LayoutRectangle, Image} from 'react-native';

const CARD_WIDTH = 200;
const CARD_HEIGHT = 200;

export const PanGestureScreen = () => {
  const translateY = useSharedValue(0);
  const translateX = useSharedValue(0);

  const [container, setContainer] = useState<LayoutRectangle>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {
      offsetX: number;
      offsetY: number;
    }
  >({
    onActive: (event, context) => {
      translateX.value = event.translationX + context.offsetX;
      translateY.value = event.translationY + context.offsetY;
    },

    onStart: (_, context) => {
      context.offsetX = translateX.value;
      context.offsetY = translateY.value;
    },

    onEnd: event => {
      translateX.value = withDecay({
        velocity: event.velocityX,
        clamp: [0, container?.width - CARD_WIDTH],
      });

      translateY.value = withDecay({
        velocity: event.velocityY,
        clamp: [0, container?.height - CARD_HEIGHT],
      });
    },
  });

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });

  return (
    <View
      style={styles.layout}
      onLayout={({nativeEvent: {layout}}) => setContainer(layout)}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View {...{style}}>
          <Image style={styles.card} source={require('../assets/pan.png')} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: 'black',
  },

  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    resizeMode: 'contain',
    borderRadius: 16,
  },
});
