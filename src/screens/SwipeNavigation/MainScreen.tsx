import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {Routes} from '../../navigation';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {useVector, snapPoint} from 'react-native-redash';
import {windowWidth} from '../../helpers';
import {SwipeGesture} from '../../components/SwipeGesture';

export const MainScreen = () => {
  const {navigate, goBack} = useNavigation();
  const isGestureActive = useSharedValue(false);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: () => (isGestureActive.value = true),

    onActive: ({translationX, translationY}) => {
      //   translation.x.value = translationX;
      //   translation.y.value = translationY;
    },

    onEnd: ({translationX, velocityX}) => {
      const snapBack =
        snapPoint(-translationX, -velocityX, [0, windowWidth]) === windowWidth;

      if (snapBack) {
        runOnJS(navigateToRightScreen);
        // navigateToRightScreen();
        // runOnJS(() => navigate(Routes.RIGHT_SWIPE_SCREEN))();
      } else {
        isGestureActive.value = false;
      }
    },
  });

  const navigateToRightScreen = () => {
    navigate(Routes.RIGHT_SWIPE_SCREEN);
  };

  return (
    <PanGestureHandler {...{onGestureEvent}}>
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          {backgroundColor: 'red', paddingHorizontal: 20},
        ]}>
        <ScrollView>
          <TouchableOpacity
            onPress={() => navigate(Routes.RIGHT_SWIPE_SCREEN)}
            style={{
              width: '100%',
              height: 53,
              backgroundColor: 'yellow',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 40,
            }}>
            <Text>Go to Bottom</Text>
          </TouchableOpacity>

          <Image
            source={require('./3.jpg')}
            style={{
              width: 300,
              height: 500,
            }}
          />

          <Image
            source={require('./3.jpg')}
            style={{
              width: 300,
              height: 500,
            }}
          />

          <Image
            source={require('./3.jpg')}
            style={{
              width: 300,
              height: 500,
            }}
          />

          <Image
            source={require('./3.jpg')}
            style={{
              width: 300,
              height: 500,
            }}
          />
        </ScrollView>
      </Animated.View>
    </PanGestureHandler>
  );
};
