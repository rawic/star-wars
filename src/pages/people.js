import React from 'react';
import { useSelector } from 'react-redux';
import { filtersActions, peopleActions } from 'redux/actions';
import Layout from '@layout/Default';
import { PersonList, Input, Button, AlignContent } from '@components';

import { useInfiniteQuery } from 'react-query';
//import { dehydrate } from 'react-query/hydration';
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
    status,
    data,
    isFetching,
    isFetchingMore,
    fetchMore,
    canFetchMore,
  } = useInfiniteQuery(['people', filtersState.text], fetchPeople, {
    refetchOnWindowFocus: false,
    getFetchMore: (lastGroup) => {
      lastGroup.page = lastGroup.next?.split('&page=')[1];
      return lastGroup.page;
    },
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

      {status === 'error' && <div>Something went wrong ...</div>}

      {status === 'loading' ? (
        <div>Retrieving Information ...</div>
      ) : (
        <>
          <PersonList data={data} favorites={favoritesState} />

          <AlignContent $align="center">
            <Button
              onClick={() => fetchMore()}
              disabled={!canFetchMore || isFetchingMore}
              $highlight
              $submit
            >
              {isFetchingMore
                ? 'Loading more...'
                : canFetchMore
                ? 'Load More'
                : 'Nothing more to load'}
            </Button>
          </AlignContent>

          <div>{isFetching && !isFetchingMore ? 'Fetching...' : null}</div>
        </>
      )}
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  auth(ctx);

  return { props: {} };
}

export default Dashboard;
