import React from 'react';

import {ThemeProvider} from '@shopify/restyle/dist/context';
import {QueryClient} from '@tanstack/react-query';
import {QueryClientProvider} from '@tanstack/react-query/build/legacy/QueryClientProvider';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {Router} from '@routes';
import {theme} from '@theme';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Router />
          <Toast />
        </ThemeProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;
