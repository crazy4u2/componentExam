import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { getProfile } from '~apis/Profile';
import { Layout, Text } from '~components/common';
import { loginState } from '~states';

export interface ProfileInfo {
  image: string;
  userName: string;
}

const Mypage = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const router = useRouter();

  const [profile, setProfile] = useState<ProfileInfo>({ image: '', userName: '' });

  useQuery('profile', () => getProfile(), {
    onError: (err) => console.log('ERROR ==========> ', err),
    onSuccess: (result) => {
      if (result) setProfile({ image: result.imageUrl, userName: result.name });
    },
  });

  // login 안했으면 팅
  // useEffect(() => {
  //   if (!isLogin) {
  //     router.push('login');
  //   }
  // }, []);

  console.log(profile);

  return (
    <Layout address="mymenu">
      <Container>
        <div className="user-container">
          {profile.image !== '' ? (
            <span className="round">
              <Image src={profile.image} width="72" height="72" alt="profile_img" className="round" />
            </span>
          ) : (
            <div className="round img-emptyset" />
          )}
          <div className="mymenu-title">
            <Text font="S18_Bold">
              {profile.userName !== '' && profile.userName}
              <Text font="S18_Regular" as="span">
                님
              </Text>
            </Text>
            <Text font="S18_Regular" className="text-space">
              안녕하세요
            </Text>
          </div>
        </div>
        <div className="info-box">
          <Text font="S16_Regular" color="bithumbGray500" className="info-text">
            빗썸라이브 앱에서는 다양한 상품과 라이브 방송을 즐기실 수 있습니다.
          </Text>
          <Text font="S16_Regular" color="bithumbGray500" className="info-text">
            주문내역, 배송조회 등 더 다양한 기능을 사용하시려면 빗썸라이브 앱을 이용해주세요.
          </Text>
        </div>
        <button className="mymenu-btn">앱으로 열기</button>
        <button className="mymenu-btn">로그아웃</button>
      </Container>
    </Layout>
  );
};

// styles
const Container = styled.section`
  width: 335px;
  margin: 100px auto 0;
  height: auto;
  > .user-container {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.bithumbGray800};
    font: ${({ theme }) => theme.fonts.S14_Bold};
    .round {
      width: 72px;
      height: 72px;
      border-radius: 50px;
      margin-right: 12px;
    }
    .img-emptyset {
      background: #fff;
    }
    .text-space {
      letter-spacing: 0.5px;
    }
  }

  .info-box {
    margin-top: 37px;
    margin-bottom: 23px;
  }
  button {
    &:first-child {
      background-color: #d1ef1a;
      color: ${({ theme }) => theme.colors.bithumbGray900};
      border: none;
      margin-bottom: 20px;
    }
    &:nth-child(2n) {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.bithumbGray150};
      border: 1px solid ${({ theme }) => theme.colors.bithumbGray500};
    }
  }

  .mymenu-btn {
    width: 100%;
    height: 52px;
    border-radius: 8px;
    font: ${({ theme }) => theme.fonts.S16_Regular};
  }

  .mymenu-btn:active {
    opacity: 0.8;
  }

  .info-text {
    word-break: keep-all;
    text-align: center;
    line-height: 24px;
  }
`;

export default Mypage;
