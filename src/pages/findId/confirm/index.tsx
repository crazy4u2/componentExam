import { NextPage } from 'next';
import Head from 'next/head';
import Confirm from '~components/auth/findId/confirm';

const ConfirmPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>아이디 확인</title>
      </Head>
      <Confirm />
    </div>
  );
};

export default ConfirmPage;
