import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const BottomScreen = () => {
  return (
    <>
      <SafeAreaView edges={['top']} style={styles.backColor} />

      <View style={styles.layout}>
        <Text style={styles.name}>BOTTOM SCREEN</Text>
      </View>
      <SafeAreaView edges={['bottom']} style={styles.backColor} />
    </>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0, 2, 52, 0.8)',
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  backColor: {
    backgroundColor: 'rgba(0, 2, 52, 0.8)',
  },

  name: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },

  box: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingBottom: 20,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 1,
  },

  caption: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
    textTransform: 'capitalize',
  },
});
