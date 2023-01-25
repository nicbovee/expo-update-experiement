import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import ErrorBoundary from 'react-native-error-boundary';
import { LoadUpdates } from './LoadUpdates';

export default function App() {
  return (
    <ErrorBoundary>
      <View style={styles.container}>
        <LoadUpdates />
        <StatusBar style="auto" />
      </View>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'center',
  },
});
