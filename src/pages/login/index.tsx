import Head from 'next/head';
import Login from '~components/auth/login';

const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>로그인</title>
      </Head>
      <Login />
    </div>
  );
};

export default LoginPage;
