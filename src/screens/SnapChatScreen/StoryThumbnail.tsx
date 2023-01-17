import * as React from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';
import {View, Image, StyleSheet, Pressable} from 'react-native';

import {Story} from './Model';

const borderRadius = 50;

interface StoryThumbnailProps {
  story: Story;
}

const StoryThumbnail = ({story}: StoryThumbnailProps) => {
  const navigation = useNavigation();
  const [opacity, setOpacity] = React.useState(1);

  useFocusEffect(() => {
    if (navigation.isFocused()) {
      setOpacity(1);
    }
  });

  return (
    <View style={styles.item}>
      <SharedElement id={story.id}>
        <Pressable
          style={() => ({
            borderRadius: 6,
          })}
          onPress={() => {
            setOpacity(0);
            navigation.navigate('Story', {story});
          }}>
          <Image source={story.source} style={[styles.video, {opacity}]} />
        </Pressable>
      </SharedElement>
    </View>
  );
};

export default StoryThumbnail;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    marginTop: 16,
    borderRadius,
  },

  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    borderRadius,
  },

  item: {
    width: '48%',
  },

  video: {
    height: 292,
    borderRadius: 6,
    width: '100%',
  },
});
