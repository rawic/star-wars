import axios from 'axios';

export async function fetchPeople(params) {
  const search = params?.queryKey[1]?.search || '';
  const page = params?.pageParam || '1';

  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}?search=${search}&page=${page}`
  );

  return data;
}

export async function fetchPerson(id) {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}${id}`);

  return data;
}
