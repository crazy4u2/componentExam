import Head from 'next/head';
import Mypage from '~components/mypage';

const MypagePage = () => {
  return (
    <div>
      <Head>
        <title>마이메뉴</title>
      </Head>
      <Mypage />
    </div>
  );
};

export default MypagePage;
