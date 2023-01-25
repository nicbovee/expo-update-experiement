import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View } from 'react-native';

import ErrorBoundary from 'react-native-error-boundary';
import { LoadUpdates } from './LoadUpdates';
import { AppChanges } from './AppChanges';

export default function App() {
  return (
    <ErrorBoundary>
      <View style={styles.container}>
        <Text style={styles.hero}>Expo Update Experiment</Text>
        <LoadUpdates />
        <AppChanges />
        <StatusBar style="auto" />
      </View>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#f5f5f5',
    alignItems: 'left',
  },
  hero: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#434343',
  },
});
