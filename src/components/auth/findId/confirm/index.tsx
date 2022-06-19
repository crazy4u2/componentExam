import { useRouter } from 'next/router';
import { FC, useCallback } from 'react';
import { useFindPwQuery } from 'src/query/useAuthQuery';
import styled from 'styled-components';
import AuthTemplate from '~components/auth/common/AuthTemplate';
import { Button, Text } from '~components/common';
import { ROUTE } from '~constants';

interface Props {}

const Confirm: FC<Props> = () => {
  const { email, date, moveToLogin, fetchFindPw } = useConfirm();

  return (
    <AuthTemplate title="아이디 확인" description="고객님의 아이디 정보를 확인해 주세요.">
      <Container>
        <div className="info-card">
          <Text font="S24_Regular">{email}</Text>
          <Text color="bithumbGray450">가입일 : {date}</Text>
        </div>
        <Button onClick={moveToLogin}>로그인</Button>
        <Button onClick={fetchFindPw}>임시 비밀번호 발급</Button>
      </Container>
    </AuthTemplate>
  );
};

// hooks
function useConfirm() {
  const rotuer = useRouter();
  const moveToLogin = useCallback(() => rotuer.push(ROUTE.LOGIN), [rotuer]);
  const email = rotuer.query.email || 'Bithumblive';
  const date = rotuer.query.date || '2022-01-01';
  const name = rotuer.query.name || '빗썸라이브';
  const userId = rotuer.query.userId || '';
  const { mutate: findPwMutate } = useFindPwQuery();
  const fetchFindPw = useCallback(() => {
    if (!Array.isArray(email) && !Array.isArray(name) && !Array.isArray(userId))
      findPwMutate({ email, name, userId }, { onSuccess: () => rotuer.push(ROUTE.LOGIN) });
  }, [email, findPwMutate, name, rotuer, userId]);

  return { email, date, moveToLogin, fetchFindPw };
}

// styles
const Container = styled.section`
  .info-card {
    margin-bottom: 32px;
    padding: 40px 0;
    background: ${({ theme }) => theme.colors.bithumbGray850};
    border-radius: 8px;
    text-align: center;
    > p:first-of-type {
      text-decoration: underline;
      margin-bottom: 24px;
    }
  }
  button {
    margin-bottom: 20px;
    &:last-of-type {
      background: transparent;
      border: 1px solid ${({ theme }) => theme.colors.bithumbGray700};
      color: ${({ theme }) => theme.colors.bithumbGray150};
    }
  }
`;

export default Confirm;
