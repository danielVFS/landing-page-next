import Home from '../templates/Home';
import { loadPages } from '../api/load-pages';
import { GetStaticProps } from 'next';

export type IndexProps = {
  data: [];
};

export default function Index({ data = null }: IndexProps) {
  return <Home data={data} />;
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  let data = null;

  try {
    data = await loadPages('udemy');
  } catch (error) {
    console.log(error);
  }

  if (!data || !data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
