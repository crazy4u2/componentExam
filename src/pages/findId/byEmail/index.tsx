import Head from 'next/head';
import ByEmail from '~components/auth/findId/byEmail';

const ByEmailPage = () => {
  return (
    <div>
      <Head>
        <title>이메일로 찾기</title>
      </Head>
      <ByEmail />
    </div>
  );
};

export default ByEmailPage;
