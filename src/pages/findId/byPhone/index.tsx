import Head from 'next/head';
import ByPhone from '~components/auth/findId/byPhone';

const ByPhonePage = () => {
  return (
    <div>
      <Head>
        <title>본인인증으로 찾기</title>
      </Head>
      <ByPhone />
    </div>
  );
};

export default ByPhonePage;
