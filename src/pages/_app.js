import { Provider } from 'react-redux';
import MainTemplate from 'templates/MainTemplate';
import { ReactQueryCacheProvider, QueryCache } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { store } from '../redux/store';
import { ReactQueryDevtools } from 'react-query-devtools';

const queryCache = new QueryCache();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <ReactQueryCacheProvider queryCache={queryCache}>
          <Hydrate state={pageProps.dehydratedState}>
            <MainTemplate>
              <Component {...pageProps} />
            </MainTemplate>
          </Hydrate>
        </ReactQueryCacheProvider>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default MyApp;
