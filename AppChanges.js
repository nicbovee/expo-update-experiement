import { View, Text } from 'react-native';

export const AppChanges = () => {
  return (
    <View style={{ marginTop: 20, width: '100%' }}>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
        App changes will appear here:
      </Text>
      <View
        style={{
          backgroundColor: '#fff',
          borderColor: '#e3e3e3',
          borderWidth: 1,
          padding: 20,
          width: '100%',
          marginTop: 20,
          height: '70%',
        }}
      >
        <Text>A new change</Text>
      </View>
    </View>
  );
};
