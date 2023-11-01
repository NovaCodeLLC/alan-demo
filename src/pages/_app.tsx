import type { AppProps } from 'next/app'
import {ThemeProvider} from '@mui/material/styles';
import {customTheme} from '@components/styles/global';

export default function App({ Component, pageProps }: AppProps) {

  return (
      <>
        <ThemeProvider theme={customTheme}>
            <Component {...pageProps} />
        </ThemeProvider>
    </>
  )
}
