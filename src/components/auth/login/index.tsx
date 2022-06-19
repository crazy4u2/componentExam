import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useLoginQuery } from 'src/query/useAuthQuery';
import styled from 'styled-components';
import { Button, Form, Layout, Text } from '~components/common';

import AccountLink from './AccountLink';
import LoginInput, { LoginInputForm } from './LoginInput';
import SnsLogin from './SnsLogin';

const Login = () => {
  const { onSubmit } = useLogin();

  return (
    <Layout address="a">
      <Container>
        <div className="login-title">
          <Text font="S28_Light">반갑습니다!</Text>
          <Text font="S28_Light">
            <Text font="S28_Bold" as="span">
              빗썸라이브
            </Text>
            입니다.
          </Text>
        </div>
        <Form<LoginInputForm> id="loginForm" onSubmit={onSubmit}>
          {(props) => <LoginInput {...props} />}
        </Form>
        <Button form="loginForm" htmlType="submit">
          로그인
        </Button>
        <AccountLink />
        <SnsLogin />
      </Container>
    </Layout>
  );
};

// hooks
function useLogin() {
  const { mutate: loginMutate } = useLoginQuery();
  const onSubmit = useCallback(
    (data: LoginInputForm) => {
      if (data.userId && data.pwd) loginMutate({ userId: data.userId, pwd: data.pwd });
    },
    [loginMutate]
  );

  return {
    onSubmit,
  };
}

// styles
const Container = styled.section`
  width: 335px;
  margin: 0 auto;
  padding: 120px 0 0 0;
  .login-title {
    margin-bottom: 40px;
  }
  > button {
    margin-top: 16px;
  }
`;

export default Login;
