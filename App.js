import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ReadStory } from './Screens/ReadStory'
import { WriteStory } from './Screens/WriteStory';
import { AppTabNavigator } from './components/AppTabNaviagtor';

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
      <ReadStory />
      <WriteStory />
      <Text>Hi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
