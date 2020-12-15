import axios from 'axios';

export async function fetchPeople({ queryKey }, page = 1) {
  const search = queryKey[0];

  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}?search=${search}&page=${page}`
  );
  return data;
}
