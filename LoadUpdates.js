import * as Updates from 'expo-updates';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, Button } from 'react-native';

export const LoadUpdates = () => {
  const [update, setUpdate] = useState(null);

  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();
      setUpdate(update);

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      alert(`Error fetching latest Expo update: ${error}`);
    }
  }

  useEffect(() => {
    onFetchUpdateAsync();
  }, []);
  return (
    <>
      {__DEV__ && <Text style={styles.title}>In Dev Mode</Text>}
      <Text>Update channel: {JSON.stringify(update)}</Text>
      <Text>Update channel: {Updates.channel}</Text>
      <Text>isEmbeddedLaunch: {Updates.isEmbeddedLaunch}</Text>
      <Text>releaseChannel: {Updates.releaseChannel}</Text>
      <Text>updateId: {Updates.updateId}</Text>
      <Text>New Text for update</Text>
      <Button title="Fetch update" onPress={onFetchUpdateAsync} />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
});
