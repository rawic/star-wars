import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import Layout from '@layout/Default';
import { auth } from 'services';

const Person = ({ person }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <h1>Post: {id}</h1>
      {person.name}
      {/* <ul>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
            <a>First comment</a>
          </Link>
        </li>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/second-comment`}>
            <a>Second comment</a>
          </Link>
        </li>
      </ul> */}
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const token = auth(ctx);

  if (!token) return { props: {} };

  const person = await axios.get(
    `https://swapi.dev/api/people/${ctx.query.id}`
  );

  return {
    props: {
      person: person.data,
    },
  };
}

export default Person;
