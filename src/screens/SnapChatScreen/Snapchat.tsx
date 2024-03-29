import React from 'react';
import {StyleSheet, View, FlatList, ListRenderItemInfo} from 'react-native';

import {Story} from './Model';
import StoryThumbnail from './StoryThumbnail';

export const stories: Story[] = [
  {
    id: '2',
    source: require('./assets/stories/2.jpg'),
    user: 'derek.russel',
    avatar: require('./assets/avatars/derek.russel.png'),
  },
  {
    id: '4',
    source: require('./assets/stories/4.jpg'),
    user: 'jmitch',
    avatar: require('./assets/avatars/jmitch.png'),
  },
  {
    id: '7',
    source: require('./assets/stories/7.jpg'),
    user: 'andrea.schmidt',
    avatar: require('./assets/avatars/andrea.schmidt.png'),
    video: require('./assets/stories/7.mp4'),
  },
  {
    id: '5',
    source: require('./assets/stories/5.jpg'),
    user: 'monicaa',
    avatar: require('./assets/avatars/monicaa.png'),
  },
  {
    id: '3',
    source: require('./assets/stories/3.jpg'),
    user: 'alexandergarcia',
    avatar: require('./assets/avatars/alexandergarcia.png'),
  },
  {
    id: '1',
    source: require('./assets/stories/1.jpg'),
    user: 'andrea.schmidt',
    avatar: require('./assets/avatars/andrea.schmidt.png'),
  },
  {
    id: '6',
    source: require('./assets/stories/6.jpg'),
    user: 'andrea.schmidt',
    avatar: require('./assets/avatars/andrea.schmidt.png'),
  },
];

const renderItem = ({item}: ListRenderItemInfo<any>) => {
  return <StoryThumbnail key={item.id} story={item} />;
};

const Snapchat = () => {
  return (
    <View style={styles.container}>
      <FlatList
        bounces={false}
        data={stories}
        numColumns={2}
        initialNumToRender={15}
        renderItem={renderItem}
        scrollEventThrottle={16}
        onEndReachedThreshold={0.5}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="always"
        columnWrapperStyle={styles.columnWrapperStyle}
      />
    </View>
  );
};

export default Snapchat;

const styles = StyleSheet.create({
  columnWrapperStyle: {
    marginBottom: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },

  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
