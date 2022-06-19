import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';
import styled from 'styled-components';
import { Input } from '~components/common';

export type LoginInputForm = {
  userId?: string;
  pwd?: string;
};

interface Props extends UseFormReturn<LoginInputForm> {}

const LoginInput: FC<Props> = ({ ...props }) => {
  return (
    <Container>
      <Input name="userId" placeholder="아이디를 입력하세요" {...props} />
      <Input name="pwd" type="password" placeholder="비밀번호를 입력하세요" {...props} />
    </Container>
  );
};

const Container = styled.div`
  > div {
    margin-bottom: 8px;
  }
`;

export default LoginInput;
