import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Layout from '@layout/Default';
import { Text } from '@components';
import * as S from './styles';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { fetchPerson, auth } from 'services';
import { personActions, favoritesActions } from '@redux/actions';

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
      <S.Wrapper>
        <S.PersonName>{name}</S.PersonName>

        <S.PersonDetails>
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
        </S.PersonDetails>

        {isFavorite ? (
          <S.FavoriteButton
            onClick={() => favoritesActions.remove(person)}
            $active
          />
        ) : (
          <S.FavoriteButton onClick={() => favoritesActions.add(person)} />
        )}
      </S.Wrapper>
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
