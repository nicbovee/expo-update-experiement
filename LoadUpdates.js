import * as Updates from 'expo-updates';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, Button } from 'react-native';

export const LoadUpdates = () => {
  const [update, setUpdate] = useState(null);
  const [checkedForUpdates, setCheckedForUpdates] = useState(false);

  async function onFetchUpdateAsync() {
    try {
      setCheckedForUpdates(true);
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
      {__DEV__ && <Text style={styles.dev}>Running: DEV MODE</Text>}
      {!__DEV__ && <Text style={styles.live}>Running: LIVE MODE</Text>}
      <Text>Checked for updates? {JSON.stringify(checkedForUpdates)}</Text>
      <Text>Update object: {JSON.stringify(update)}</Text>
      <Text>
        Update channel: {Updates.channel ? Updates.channel : 'Not set'}
      </Text>
      <Text>
        isEmbeddedLaunch:{' '}
        {Updates.isEmbeddedLaunch ? Updates.isEmbeddedLaunch : 'Not set'}
      </Text>
      <Text>releaseChannel: {Updates.releaseChannel}</Text>
      <Text>updateId: {Updates.updateId ? Updates.updateId : 'Not set'}</Text>
      <Text>Trying to see why there's an error updateing</Text>
      <Button title="Fetch update" onPress={onFetchUpdateAsync} />
    </>
  );
};

const styles = StyleSheet.create({
  dev: {
    fontSize: 15,
    marginBottom: 10,
    color: 'red',
    paddingTop: 10,
    paddingBottom: 10,
  },
  live: {
    fontSize: 15,
    marginBottom: 10,
    color: 'green',
    paddingTop: 10,
    paddingBottom: 10,
  },
});
