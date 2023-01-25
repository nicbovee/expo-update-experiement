import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Updates from 'expo-updates';
import { useEffect, useState } from 'react';

export default function App() {
  const [update, setUpdate] = useState(null);

  useEffect(() => {
    async function updateApp() {
      if (__DEV__) return;
      const updates = await Updates.checkForUpdateAsync();
      console.log({ updates });
      setUpdate(updates);
    }
    updateApp();
  }, []);

  return (
    <View style={styles.container}>
      {__DEV__ && <Text style={styles.title}>In Development Mode</Text>}
      <Text>Update channel: {JSON.stringify(update)}</Text>
      <Text>Update channel: {Updates.channel}</Text>
      <Text>isEmbeddedLaunch: {Updates.isEmbeddedLaunch}</Text>
      <Text>releaseChannel: {Updates.releaseChannel}</Text>
      <Text>updateId: {Updates.updateId}</Text>
      <Text>New Text for update</Text>
      <StatusBar style="auto" />
    </View>
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
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
});
