import { FC } from 'react';
import styled from 'styled-components';
import { Icon, Text } from '~components/common';

interface Props {}

const SnsLogin: FC<Props> = () => {
  return (
    <Container>
      <div className="login-sns-title">
        <div />
        <Text font="S12_Regular">SNS로 로그인 or 회원가입</Text>
        <div />
      </div>

      <div className="login-sns-button">
        <div>
          <Icon name="kakao" />
        </div>
        <div>
          <Icon name="naver" />
        </div>
        <div>
          <Icon name="apple" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 120px 0;
  > .login-sns-title {
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
      flex: 1;
      height: 1px;
      background: ${({ theme }) => theme.colors.bithumbGray400};
    }
    > p {
      margin: 0 8px;
    }
  }
  > .login-sns-button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      &:nth-of-type(2) {
        margin: 0 24px;
      }
    }
  }
`;

export default SnsLogin;
