import type { NextPage } from 'next';
import Head from 'next/head';
import Home from '~components/home';

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>빗썸 라이브</Head>
      <Home />
    </div>
  );
};

export default HomePage;
