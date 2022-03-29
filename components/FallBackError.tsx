import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import RNRestart from 'react-native-restart';

interface FallbackErrorProps {
  error: Error;
}

const FallBackError = ({error}: FallbackErrorProps) => {
  return (
    <View style={styles.container}>
      <Text>Something went wrong</Text>
      <Text>Error: {error.message}</Text>
      <Button title="Restart app" onPress={() => RNRestart.Restart()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FallBackError;
