import Head from 'next/head';
import FindPw from '~components/auth/findPw';

const FindPwPage = () => {
  return (
    <div>
      <Head>
        <title>비밀번호 찾기</title>
      </Head>
      <FindPw />
    </div>
  );
};

export default FindPwPage;
