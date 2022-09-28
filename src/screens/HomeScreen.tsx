import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useRoute,
  useNavigation,
} from '@react-navigation/native';

import {RouteService} from '../shared';
import {routeData} from '../navigation/routes';

export const HomeScreen = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.layout}>
      <ScrollView>
        {routeData.map((item, index) => (
           <TouchableOpacity
            key={item.routeName}
            activeOpacity={0.7}
            style={styles.box}
            onPress={() => navigation.navigate(item.routeName)}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.name}> -->  </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: 'mediumslateblue',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  name: {
    fontSize: 25,
    fontWeight: '600',
  },

  box: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingBottom: 10,
  },
});
