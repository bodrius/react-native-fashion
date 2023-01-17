import {useSharedValue} from 'react-native-reanimated';
import {RectButton} from 'react-native-gesture-handler';
import React, {useCallback, useRef, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

import {Swipeable} from './Swipeable';
import type {ProfileModel} from './Profile';
import type {SwipeHandler} from './Swipeable';

interface ProfilesProps {
  profiles: ProfileModel[];
}

export const Profiles = ({profiles: defaultProfiles}: ProfilesProps) => {
  const topCard = useRef<SwipeHandler>(null);
  const scale = useSharedValue(0);
  const [profiles, setProfiles] = useState(defaultProfiles);
  const onSwipe = useCallback(() => {
    setProfiles(profiles.slice(0, profiles.length - 1));

    if (!(profiles.length - 1)) {
      setProfiles(defaultProfiles);
    }

    console.log('profiles', profiles.length);
  }, [profiles, defaultProfiles]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cards}>
        {profiles.map((profile, index) => {
          const onTop = index === profiles.length - 1;
          const ref = onTop ? topCard : null;
          return (
            <Swipeable
              ref={ref}
              key={profile.id}
              profile={profile}
              scale={scale}
              onSwipe={onSwipe}
              onTop={onTop}
            />
          );
        })}
      </View>

      <View style={styles.footer}>
        <RectButton
          style={[styles.circle, {backgroundColor: '#ec5288'}]}
          onPress={() => {
            topCard.current?.swipeLeft();
          }}>
          <Text>nope</Text>
        </RectButton>

        <RectButton
          style={[styles.circle, {backgroundColor: '#6ee3b4'}]}
          onPress={() => {
            topCard.current?.swipeRight();
          }}>
          <Text>like</Text>
        </RectButton>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#342344',
    justifyContent: 'space-evenly',
  },
  cards: {
    flex: 1,
    marginHorizontal: 16,
    zIndex: 100,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 16,
  },
  circle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.18,
    shadowRadius: 2,
  },
});
