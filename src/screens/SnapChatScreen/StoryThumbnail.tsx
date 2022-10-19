import * as React from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
  Text,
} from 'react-native';

import {Story} from './Model';

const borderRadius = 50;

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
    resizeMode: 'cover',
    borderRadius,
  },
});

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
    <View
      style={{
        flexDirection: 'row',
        padding: 30,
        alignItems: 'center',
      }}>
      <SharedElement id={story.id}>
        <Pressable
          style={({pressed}) => ({
            opacity: pressed ? 0.5 : 1,
            width: 50,
            height: 50,
            borderRadius: 6,
          })}
          onPress={() => {
            setOpacity(0);
            navigation.navigate('Story', {story});
          }}>
          <Image source={story.source} style={[styles.image, {opacity}]} />
        </Pressable>
      </SharedElement>
      <Text style={{marginLeft: 30}}>{story.user}</Text>
    </View>
  );
};

export default StoryThumbnail;
