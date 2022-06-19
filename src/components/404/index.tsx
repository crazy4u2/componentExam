import Image from 'next/image';
import unknownPic from '../../assets/images/icn/icn_404.png';
import styled from 'styled-components';
import { Layout, Text } from '~components/common';

const Custom404 = () => {
  const moveToMain = () => {
    console.log('메인 이동 이벤트');
  };
  return (
    <Layout address="404">
      <Container>
        <Image src={unknownPic} width="65" height="75" alt="404image" />
        <Text font="S24_Regular" color="bithumbGray150" className="custom404-text">
          페이지를 찾을 수 없습니다.
        </Text>
        <Text font="S18_Regular" color="bithumbGray500" className="custom404-sub">
          주소가 올바르지 않거나 알 수 없는 오류로 인해
          <br /> 페이지를 찾을 수 없습니다.
        </Text>

        <button className="move-btn" onClick={moveToMain}>
          메인으로 가기
        </button>
      </Container>
    </Layout>
  );
};

const Container = styled.section`
  width: 335px;
  margin: 100px auto 0;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .custom404-text {
    margin: 45px 0 17px;
  }

  .custom404-sub {
    text-align: center;
  }

  .move-btn {
    width: 122px;
    height: 40px;
    border-radius: 8px;
    border: 0;
    background-color: #d1ef1a;
    align-items: center;
    color: ${({ theme }) => theme.colors.bithumbGray900};
    font: ${({ theme }) => theme.fonts.S14_Bold};
  }
  .move-btn:active {
    opacity: 0.8;
  }
`;
export default Custom404;
