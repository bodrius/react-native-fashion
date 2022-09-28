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
import {clamp, withBouncing} from 'react-native-redash';

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

  const boundX = container.width - CARD_WIDTH - 3;
  const boundY = container.height - CARD_HEIGHT - 3;

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {
      offsetX: number;
      offsetY: number;
    }
  >({
    onActive: (event, context) => {
      translateX.value = clamp(event.translationX + context.offsetX, 3, boundX);
      translateY.value = clamp(event.translationY + context.offsetY, 3, boundY);
    },

    onStart: (_, context) => {
      context.offsetX = translateX.value;
      context.offsetY = translateY.value;
    },

    onEnd: ({velocityX, velocityY}) => {
      translateX.value = withDecay({
        velocity: velocityX,
        clamp: [3, boundX],
      });

      translateY.value = withDecay({
        velocity: velocityY,
        clamp: [3, boundY],
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
    backgroundColor: 'white',
  },

  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    resizeMode: 'contain',
    borderRadius: 16,
  },
});
