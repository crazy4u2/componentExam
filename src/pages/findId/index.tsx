import Head from 'next/head';
import FindId from '~components/auth/findId/main';

const FindIdPage = () => {
  return (
    <div>
      <Head>
        <title>아이디 찾기</title>
      </Head>
      <FindId />
    </div>
  );
};

export default FindIdPage;
