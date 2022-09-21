import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const SecondBottomScreen = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.name}>SECOND BOTTOM SCREEN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'deepskyblue',
  },

  name: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
  },
});
