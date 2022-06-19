import Head from 'next/head';
import Custom404 from '~components/404';

const Custom404Page = () => {
  return (
    <div>
      <Head>
        <title>404</title>
      </Head>
      <Custom404 />
    </div>
  );
};

export default Custom404Page;
