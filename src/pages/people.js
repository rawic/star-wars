import React from 'react';
import { useSelector } from 'react-redux';
import { filtersActions, peopleActions } from 'redux/actions';
import Layout from '@layout/Default';
import { PersonList, Input, Button, AlignContent } from '@components';

import { QueryClient, useInfiniteQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { fetchPeople, auth } from 'services';

const handleFilterChange = (e) => {
  filtersActions.text(e.target.value);
};

const Dashboard = () => {
  const [filtersState, favoritesState] = useSelector((state) => [
    state.filters,
    state.favorites,
  ]);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(['people', { search: filtersState.text }], fetchPeople, {
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage, pages) => lastPage.next?.split('&page=')[1],
  });

  return (
    <Layout>
      <Input
        type="text"
        placeholder="Search..."
        onChange={handleFilterChange}
        value={filtersState.text}
        $fullwidth
        $search
      />

      {status === 'loading' ? (
        <p>Retrieving Information...</p>
      ) : status === 'error' ? (
        <p>Something went wrong...</p>
      ) : (
        <>
          <PersonList data={data.pages} favorites={favoritesState} />

          <AlignContent $align="center">
            <Button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
              $highlight
              $submit
            >
              {isFetchingNextPage
                ? 'Loading more...'
                : hasNextPage
                ? 'Load More'
                : 'Nothing more to load'}
            </Button>
          </AlignContent>

          <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
        </>
      )}
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const token = auth(ctx);
  if (!token) {
    return { props: {} };
  }

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('people', fetchPeople);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Dashboard;
