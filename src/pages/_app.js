import { Provider } from 'react-redux';
import MainTemplate from 'templates/MainTemplate';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { store } from '../redux/store';
import { ReactQueryDevtools } from 'react-query-devtools';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <MainTemplate>
              <Component {...pageProps} />
            </MainTemplate>
          </Hydrate>
        </QueryClientProvider>
      </Provider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </>
  );
}

export default MyApp;
