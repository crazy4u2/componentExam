import { useRouter } from 'next/router';
import { FC, useCallback } from 'react';
import styled from 'styled-components';
import { Icon, Text } from '~components/common';
import { ROUTE } from '~constants';
import AuthTemplate from '~components/auth/common/AuthTemplate';

interface Props {}

const FindId: FC<Props> = () => {
  const { moveToByEmail, moveToByPhone } = useFindId();

  return (
    <AuthTemplate title="아이디 찾기">
      <Container>
        <div>
          <button onClick={moveToByPhone}>
            <Icon name="user" />
            <Text font="S18_Bold">본인인증으로 찾기</Text>
            <Icon name="arrowRight" />
          </button>
          <Text color="bithumbGray450">휴대폰 본인인증을 완료하신 경우 휴대폰 인증을 통해 ID를 찾을 수 있습니다.</Text>
        </div>
        <div>
          <button onClick={moveToByEmail}>
            <Icon name="user" />
            <Text font="S18_Bold">이름, 이메일로 찾기</Text>
            <Icon name="arrowRight" />
          </button>
          <Text color="bithumbGray450">
            휴대폰 본인인증을 하지 않으신 경우 가입시 입력하신 이름과 이메일로 ID를 찾을 수 있습니다.
          </Text>
        </div>
      </Container>
    </AuthTemplate>
  );
};

function useFindId() {
  const { push } = useRouter();
  const moveToByEmail = useCallback(() => push(ROUTE.FIND_ID.BY_EMAIL), [push]);
  const moveToByPhone = useCallback(() => push(ROUTE.FIND_ID.BY_PHONE), [push]);

  return { moveToByEmail, moveToByPhone };
}

const Container = styled.div`
  > div {
    > button {
      display: flex;
      align-items: center;
      width: 100%;
      height: 56px;
      padding: 0 22px;
      border: 1px solid ${({ theme }) => theme.colors.bithumbGray700};
      border-radius: 8px;
      > p {
        text-align: left;
        margin-left: 10px;
        flex: 1;
      }
    }
    > p {
      margin-top: 16px;
      line-height: 1.5;
    }
    &:last-of-type {
      margin-top: 40px;
    }
  }
`;

export default FindId;
