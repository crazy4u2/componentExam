import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { Text } from '~components/common';
import { ROUTE } from '~constants';

interface Props {}

const AccountLink: FC<Props> = () => {
  return (
    <Container>
      <Link href={ROUTE.FIND_ID.MAIN} passHref>
        <a>
          <Text font="S16_Regular">아이디 찾기</Text>
        </a>
      </Link>
      <div />
      <Link href={ROUTE.FIND_PW}>
        <a>
          <Text font="S16_Regular">비밀번호 찾기</Text>
        </a>
      </Link>
      <div />
      <Link href={ROUTE.JOIN}>
        <a>
          <Text font="S16_Bold">회원가입</Text>
        </a>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 42px;
  > div {
    width: 1px;
    height: 13px;
    margin: 0 8px;
    background: ${({ theme }) => theme.colors.bithumbGray250};
  }
`;

export default AccountLink;
