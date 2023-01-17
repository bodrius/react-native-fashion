import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  View,
  GestureResponderEvent,
} from 'react-native';
import {Routes} from '../../navigation';
import {PanGestureHandler} from 'react-native-gesture-handler';
import ReAnimated, {
  runOnJS,
  useAnimatedGestureHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {useVector, snapPoint} from 'react-native-redash';
import {Animated, Easing, TouchableOpacityProps} from 'react-native';
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Mask,
  Path,
  Stop,
} from 'react-native-svg';
import {windowWidth} from '../../helpers';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const maskPathDraw = `
  M356.4,114.1c10.8,18.3,18.2,38.8,21.5,60c1.7,10.6,2.4,21.4,2.1,32.2c-0.4,10.8-1.9,21.6-4.5,32.1
  c-5.2,21.1-14.7,41.1-27.2,59c-12.6,17.9-28.3,33.6-46.1,46.4c-17.8,12.9-37.9,22.8-59.3,29c-10.7,3.1-21.7,5.2-32.9,6.2
  c-5.6,0.5-11.2,0.7-16.8,0.7c-2.8,0-5.6-0.1-8.4-0.2l-4.2-0.3c-1.4-0.1-2.8-0.2-4.2-0.4c-22.4-2.2-44.5-8.6-64.7-18.8
  c-10.1-5.1-19.9-11.1-28.9-18l-3.4-2.6l-3.3-2.7c-2.2-1.8-4.3-3.7-6.5-5.6c-4.2-3.9-8.3-7.9-12.2-12.1c-3.9-4.2-7.5-8.7-11.1-13.2
  c-3.4-4.6-6.8-9.3-9.8-14.3c-6.1-9.8-11.2-20.3-15.3-31.2c-4.1-10.9-7.1-22.3-8.9-33.8c-1.8-11.6-2.5-23.4-2.1-35
  c0.8-23.3,6-46.7,15.4-68.3c9.4-21.7,23-41.6,39.8-58.5c16.9-16.9,37.1-30.6,59.4-40c11.1-4.7,22.8-8.3,34.7-10.8
  c11.9-2.5,24-3.7,36.2-3.8c24.3-0.2,48.9,4.3,71.8,13.5c22.8,9.2,43.9,22.9,61.7,40l0.2,0.2c10.9,10.5,11.3,28,0.7,38.9
  s-28,11.3-38.9,0.7c-0.4-0.3-0.8-0.8-1.1-1.1c-12.1-13-26.8-23.8-43-31.4c-16.2-7.6-34-12-52.2-12.9c-18.2-0.9-36.5,1.8-53.8,8
  c-17.3,6.2-33.5,15.8-47.4,28.3c-13.9,12.4-25.6,27.6-34,44.5c-8.5,16.9-13.8,35.5-15.5,54.6c-0.9,9.6-0.9,19.1,0.1,28.6
  c1,9.5,2.9,18.9,5.8,28.1c2.9,9.2,6.7,18.1,11.3,26.6c2.3,4.3,4.9,8.4,7.6,12.5c2.8,4,5.6,8,8.8,11.7c3.1,3.8,6.4,7.4,9.8,10.9
  c1.8,1.7,3.5,3.5,5.3,5.1l2.7,2.5l2.8,2.4c7.5,6.4,15.7,12,24.3,17c17.2,9.9,36.3,16.6,56.1,19.6c1.2,0.2,2.5,0.4,3.7,0.5l3.7,0.5
  c2.5,0.2,5,0.5,7.5,0.6c5,0.3,10,0.4,15,0.2c10-0.4,20-1.7,29.9-4c19.7-4.6,38.7-12.8,56-23.9c17.3-11.1,32.8-25.1,45.6-41.3
  c12.8-16.2,22.8-34.8,28.9-54.7c3-10,5-20.2,5.9-30.7c0.9-10.4,0.7-21-0.4-31.4C372.4,153.6,366.2,133,356.4,114.1z
`;

const PAN_GESTURE_HANDLER_FAIL_X = [-windowWidth, windowWidth];
const PAN_GESTURE_HANDLER_ACTIVE_Y = [-2, 2];
const CAPTURE_BUTTON_SIZE = 88;

const START_RECORDING_DELAY = 200;
const MAX_RECORDING_DURATION = 29500;
const BORDER_WIDTH = 6;

export const MainScreen = () => {
  const isGestureActive = useSharedValue(false);

  const progress = new Animated.Value(973.83);
  const size = new Animated.Value(65);

  const onMoveShouldSetResponderCapture = (event: GestureResponderEvent) => {};

  return (
    <View onMoveShouldSetResponderCapture={onMoveShouldSetResponderCapture}>
      <TouchableOpacity
        // disabled={isDisabled}
        // onPress={this.onPress}
        // onLongPress={this.onLongPress}
        // onPressIn={this.onPressIn}
        // onPressOut={this.onPressOut}
        activeOpacity={1}
        pressRetentionOffset={{
          top: 1000,
          bottom: 1000,
          left: 1000,
          right: 1000,
        }}
        style={styles.button}>
        <AnimatedSvg width={size} height={size} viewBox="0 0 390 390">
          <Defs>
            <LinearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="195"
              y1="379.7917"
              x2="195"
              y2="10.2083">
              <Stop offset={0} stopColor={'#F2FF00'} />
              <Stop offset={1} stopColor={'#16FAD2'} />
            </LinearGradient>
          </Defs>
          <Mask id="mask" x="0" y="0">
            <Path d={maskPathDraw} fill={'#fff'} />
          </Mask>
          <Circle
            mask="url(#mask)"
            cx="200"
            cy="200"
            r="155"
            fill={'transparent'}
            stroke={'#fff'}
            strokeWidth="110"
          />

          <AnimatedCircle
            mask="url(#mask)"
            cx="200"
            cy="200"
            r="155"
            fill={'transparent'}
            stroke="url(#gradient)"
            strokeWidth="110"
            strokeDasharray={973.83}
            strokeDashoffset={progress}
            rotate="40deg"
            strokeLinecap="round"
            strokeLinejoin="bevel"
          />
        </AnimatedSvg>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  // shadow: {
  //   position: 'absolute',
  //   width: CAPTURE_BUTTON_SIZE,
  //   height: CAPTURE_BUTTON_SIZE,
  //   borderRadius: CAPTURE_BUTTON_SIZE / 2,
  //   backgroundColor: Colors.RED,
  // },

  button: {
    width: CAPTURE_BUTTON_SIZE,
    height: CAPTURE_BUTTON_SIZE,
    borderRadius: CAPTURE_BUTTON_SIZE / 2,
    borderWidth: BORDER_WIDTH,
    borderColor: '#fff',
  },
});
