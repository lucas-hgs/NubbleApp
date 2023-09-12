import React from 'react';
import {ThemeProvider} from '@shopify/restyle/dist/context';
import {SafeAreaView} from 'react-native';

import {Text} from './src/components/Text/Text';
import {theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="headingLarge">Teste</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
