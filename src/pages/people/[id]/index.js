import { useRouter } from 'next/router';
import { personActions } from '@redux/actions';
import axios from 'axios';
import Link from 'next/link';
import Layout from '@layout/Default';

const Person = ({ person }) => {
  personActions.update(person);

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

export async function getServerSideProps(context) {
  const person = await axios.get(
    `https://swapi.dev/api/people/${context.query.id}`
  );
  return {
    props: {
      person: person.data,
    },
  };
}

export default Person;
