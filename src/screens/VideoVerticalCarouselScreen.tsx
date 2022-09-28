import React, {useRef, useState} from 'react';
import {
  View,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Text,
  StyleSheet,
} from 'react-native';
import Video from 'react-native-video';
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

export const VideoVerticalCarouselScreen = () => {
  const videoRef = useRef<Video>(null);

  const [activeSlide, setActiveSlide] = useState(0);

  const onMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const slideSize = event.nativeEvent.layoutMeasurement.height;
    const index = event.nativeEvent.contentOffset.y / slideSize;
    const currentSlide = Math.round(index);
    setActiveSlide(currentSlide);
    // videoRef?.current?.props?.paused;
    // videoRef?.current?.props?.onLoad();
  };

  const renderItem = ({item, index}: any) => {
    console.log('index === activeSlide', index === activeSlide);

    return (
      <View
        style={{
          width: windowWidth,
          height: windowHeight - 80,
          marginBottom: 40,
          marginTop: 40,
        }}>
        <View
          style={{
            width: windowWidth,
            height: 30,
            backgroundColor: 'red',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            top: windowHeight - 200,
            zIndex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: '600'}}>
            actions for every video
          </Text>
        </View>
        <Video
          ref={videoRef}
          source={item.video}
          rate={1.0}
          resizeMode="cover"
          paused={index === activeSlide ? false : true}
          repeat={index === activeSlide}
          style={{
            flex: 1,
            borderRadius: 15,
          }}
          //   controls
        />
      </View>
    );
  };

  return (
    <>
      <View
        style={{
          width: windowWidth,
          height: 30,
          backgroundColor: 'blue',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          top: windowHeight / 10,
          zIndex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: '600', fontSize: 24}}>
          SPOTLIGHT
        </Text>
      </View>

      <FlatList
        data={stories}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.8)'}}
        onMomentumScrollEnd={onMomentumScrollEnd}
      />
    </>
  );
};
