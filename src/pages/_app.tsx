import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import '@styles/index.css';
import '@styles/scss/index.scss';
import { appWithTranslation } from 'next-i18next';
import { Provider, useDispatch } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { store } from '@stores';
import { commonActions } from '@stores/slices/common';

const theme = createMuiTheme();

const makeStore = () => store;

function App({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commonActions.setViewPort(window.innerWidth));

    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default createWrapper(makeStore).withRedux(appWithTranslation(App));
