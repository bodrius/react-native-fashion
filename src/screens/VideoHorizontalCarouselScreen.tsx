import {
  View,
  Text,
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import Video from 'react-native-video';
import React, {useRef, useState} from 'react';

import {windowHeight, windowWidth} from '../helpers';

export const stories = [
  {
    id: '1',
    video: require('./SnapChatScreen/assets/stories/7.mp4'),
  },

  {
    id: '2',
    video: require('./SnapChatScreen/assets/stories/7.mp4'),
  },

  {
    id: '3',
    video: require('./SnapChatScreen/assets/stories/7.mp4'),
  },

  {
    id: '4',
    video: require('./SnapChatScreen/assets/stories/7.mp4'),
  },

  {
    id: '5',
    video: require('./SnapChatScreen/assets/stories/7.mp4'),
  },
];

export const VideoHorizontalCarouselScreen = () => {
  const videoRef = useRef<Video>(null);

  const [manageVideo, setManageVideo] = useState({
    activeSlide: 0,
    pause: false,
  });

  const scrollX = useRef(new Animated.Value(0)).current;

  const onMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const currentSlide = Math.round(index);
    setManageVideo(prev => ({
      pause: false,
      activeSlide: currentSlide,
    }));
  };

  const onHandleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    //maybe needs added throttle function
    setManageVideo(prev => ({
      ...prev,
      pause: true,
    }));
  };

  const renderItem = ({item, index}: any) => {
    const CARD_SIZE = windowWidth;

    const inputRange = [
      (index - 1) * CARD_SIZE,
      index * CARD_SIZE,
      (index + 1) * CARD_SIZE,
    ];
    const outputRange = [0.5, 1, 0.5];
    const scale = scrollX.interpolate({inputRange, outputRange});
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0, 1, 0],
    });

    return (
      <View
        style={[
          {
            width: windowWidth,
            height: windowHeight - 80,
          },
        ]}>
        <Animated.View
          style={[
            {
              width: windowWidth,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 40,
              opacity,
            },
          ]}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: 20}}>
            actions for every video
          </Text>
        </Animated.View>

        <Animated.View
          style={[
            {
              width: windowWidth,
              height: windowHeight - 80,
              marginBottom: 40,
              opacity,
            },
            {transform: [{scale}]},
          ]}>
          <Video
            ref={videoRef}
            source={item.video}
            rate={1.0}
            resizeMode="cover"
            paused={
              !manageVideo.pause && index === manageVideo.activeSlide
                ? false
                : true
            }
            repeat={index === manageVideo.activeSlide}
            style={{
              flex: 1,
              borderRadius: 15,
            }}
          />
        </Animated.View>
      </View>
    );
  };

  return (
    <>
      <Animated.FlatList
        data={stories}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        pagingEnabled
        horizontal
        bounces={false}
        scrollEventThrottle={20}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],

          {
            listener: onHandleScroll,
            useNativeDriver: true,
          },
        )}
        showsHorizontalScrollIndicator={false}
        style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
        onMomentumScrollEnd={onMomentumScrollEnd}
      />
    </>
  );
};
