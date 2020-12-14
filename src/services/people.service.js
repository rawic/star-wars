import axios from 'axios';

export async function fetchPeople(key, search, page = 1) {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}?search=${search}&page=${page}`
  );
  return data;
}
