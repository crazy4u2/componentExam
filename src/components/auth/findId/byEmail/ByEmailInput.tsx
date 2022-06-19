import _ from 'lodash';
import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';
import styled from 'styled-components';
import { Button, Input } from '~components/common';
import { VALIDATION_SCHEMA } from '~constants';

export type ByEmailInputForm = {
  name?: string;
  email?: string;
};

interface Props extends UseFormReturn<ByEmailInputForm> {}

const ByEmailInput: FC<Props> = ({ ...props }) => {
  const { disabledSubmit } = useByEmailInput({ ...props });

  return (
    <Container>
      <Input name="name" label="이름" placeholder="이름 입력" {...props} />
      <Input name="email" label="이메일" placeholder="이메일 입력" rules={VALIDATION_SCHEMA.email} {...props} />
      <Button htmlType="submit" disabled={disabledSubmit}>
        아이디 확인
      </Button>
    </Container>
  );
};

// hooks
function useByEmailInput({ ...props }: Props) {
  const {
    watch,
    formState: { errors },
  } = props;
  const { email, name } = watch();
  const disabledSubmit = name && email && _.isEmpty(errors) ? false : true;

  return { disabledSubmit };
}

// styles
const Container = styled.div`
  margin-top: 40px;
  > div {
    margin-bottom: 16px;
    &:last-of-type {
      margin-bottom: 32px;
    }
  }
`;

export default ByEmailInput;
