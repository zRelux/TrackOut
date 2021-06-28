import React from 'react';
import { SafeAreaView } from 'react-native';

import { ThemeProvider, Div, Text } from 'react-native-magnus';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView>
        <Div shadow="sm" rounded="md">
          <Text textAlign="center">This is a Div</Text>
        </Div>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
