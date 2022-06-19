import { useRouter } from 'next/router';
import { FC, useCallback } from 'react';
import { useFindIdQyery } from 'src/query/useAuthQuery';
import AuthTemplate from '~components/auth/common/AuthTemplate';
import { Form } from '~components/common';
import { ROUTE } from '~constants';
import ByEmailInput, { ByEmailInputForm } from './ByEmailInput';

interface Props {}

const ByEmail: FC<Props> = () => {
  const { onSubmit } = useByEmail();

  return (
    <AuthTemplate
      title="아이디 찾기"
      description="회원가입 시 등록한 이름 이메일을 입력해 주세요.\n 회원가입 시 올바르지 않은 이메일을 입력한 경우 아이디,\n비밀번호 찾기가 불가하니 고객센터를 이용해 주세요."
    >
      <Form<ByEmailInputForm> onSubmit={onSubmit}>{(props) => <ByEmailInput {...props} />}</Form>
    </AuthTemplate>
  );
};

function useByEmail() {
  const rotuer = useRouter();
  const { mutate } = useFindIdQyery();
  const onSubmit = useCallback(
    (data: ByEmailInputForm) => {
      if (data.email && data.name)
        mutate(
          { email: data.email, name: data.name },
          {
            onSuccess: (value) =>
              rotuer.push(
                {
                  pathname: ROUTE.FIND_ID.CONFIRM,
                  query: { email: data.email, date: value.regDate, userId: value.userId, name: data.name },
                },
                { query: undefined }
              ),
          }
        );
    },
    [mutate, rotuer]
  );

  return { onSubmit };
}

export default ByEmail;
