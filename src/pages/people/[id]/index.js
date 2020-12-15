import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Layout from '@layout/Default';
import { Text, FavoriteButton, Button } from '@components';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { fetchPerson, auth } from 'services';
import { personActions, favoritesActions } from '@redux/actions';

export const Wrapper = styled.article`
  background-color: #272635;
  border-radius: 1.2rem;
  padding: 1.5rem 2.5rem;
  position: relative;
`;

export const PersonDetails = styled.ul`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

export const PersonName = styled.h1`
  color: ${({ theme }) => theme.highlight};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 1rem;
`;

export const FavoriteButtonWrapper = styled.div`
  position: absolute;
  right: 2.5rem;
  top: 1.5rem;
`;

export const GoBackButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  height: 3.8rem;
  margin-top: 3rem;
  width: 11.5rem;
`;

const Person = () => {
  const router = useRouter();
  const favorites = useSelector((state) => state.favorites);

  const { id } = router.query;
  const { data: person } = useQuery('person', () => fetchPerson(id));
  const isFavorite = favorites.some(
    (favorite) => favorite.name === person.name
  );

  useEffect(() => {
    personActions.update(person);
  }, [person]);

  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  } = person;

  return (
    <Layout>
      <Wrapper>
        <PersonName>{name}</PersonName>

        <PersonDetails>
          <li>
            <Text $dim>Height:</Text> {height}
          </li>
          <li>
            <Text $dim>Mass:</Text> {mass}
          </li>
          <li>
            <Text $dim>Hair color:</Text> {hair_color}
          </li>
          <li>
            <Text $dim>Skin color:</Text> {skin_color}
          </li>
          <li>
            <Text $dim>Eye color:</Text> {eye_color}
          </li>
          <li>
            <Text $dim>Birth year:</Text> {birth_year}
          </li>
          <li>
            <Text $dim>Gender:</Text> {gender}
          </li>
        </PersonDetails>

        {isFavorite ? (
          <FavoriteButtonWrapper>
            <FavoriteButton
              onClick={() => favoritesActions.remove(person)}
              $active
            />
          </FavoriteButtonWrapper>
        ) : (
          <FavoriteButtonWrapper>
            <FavoriteButton onClick={() => favoritesActions.add(person)} />
          </FavoriteButtonWrapper>
        )}
      </Wrapper>

      <Link href="/people" passHref>
        <GoBackButton as="a" $highlight $submit>
          GO BACK
        </GoBackButton>
      </Link>
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const token = auth(ctx);

  if (!token) return { props: {} };

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('person', () => fetchPerson(ctx.query.id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Person;
