import axios from 'axios';

export async function fetchPeople({ pageParam = 1, queryKey = '' }) {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}?search=${queryKey[1]?.search}&page=${pageParam}`
  );

  return data;
}

export async function fetchPerson(id) {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}${id}`);

  return data;
}
