// External modules
import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';

// Internal modules
import { AppProvider } from '@/states/context';
import globalStyles from '@/styles/globalStyles';

const App = ({ Component, pageProps }: AppProps) => (
  <AppProvider>
    <Global styles={globalStyles} />
    <Component {...pageProps} />
  </AppProvider>
);

export default App;
