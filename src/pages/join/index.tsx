import Head from 'next/head';
import Join from '~components/auth/join';

const JoinPage = () => {
  return (
    <div>
      <Head>
        <title>회원가입</title>
      </Head>
      <Join />
    </div>
  );
};

export default JoinPage;
