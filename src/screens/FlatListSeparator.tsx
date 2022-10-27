import React from 'react';
import {
  FlatList,
  TouchableHighlight,
  Platform,
  View,
  Text,
  StyleSheet,
} from 'react-native';

export const FlatListSeparator = () => {
  return (
    <View style={styles.box}>
      <FlatList
        ItemSeparatorComponent={
          Platform.OS !== 'android' &&
          (({highlighted}) => {
            return (
              <View
                style={[styles.separator, highlighted && {marginLeft: 40}]}
              />
            );
          })
        }
        data={[
          {title: 'Title Text', key: 'item1'},
          {title: 'Title Text2', key: 'item2'},
        ]}
        renderItem={({item, index, separators}) => (
          <TouchableHighlight
            key={item.key}
            onPress={() => {}}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <View style={{backgroundColor: 'white'}}>
              <Text>{item.title}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: 'red',
    paddingTop: 100,
  },

  separator: {
    backgroundColor: 'green',
    width: '100%',
    height: 2,
  },
});
