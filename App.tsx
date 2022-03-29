import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import ComponentWithError from './components/ComponentWithError';
import FallBackError from './components/FallBackError';

const App = () => {
  const [isErrorComponentVisible, setIsErrorComponentVisible] = useState(false);

  return (
    <ErrorBoundary FallbackComponent={FallBackError}>
      <View style={styles.container}>
        <Button
          onPress={() => setIsErrorComponentVisible(true)}
          title="Show component with error"
        />
        {isErrorComponentVisible && <ComponentWithError />}
      </View>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
