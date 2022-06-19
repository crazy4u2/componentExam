import { useRouter } from 'next/router';
import { FC, useCallback } from 'react';
import useTimer from 'src/hooks/useTimer';
import { useCertificationQuery, useCertVerifyQuery } from 'src/query/useAuthQuery';
import styled from 'styled-components';
import AuthTemplate from '~components/auth/common/AuthTemplate';
import ByPhoneInput, { ByPhoneInputForm } from '~components/auth/common/ByPhoneInput';
import VerifyInput from '~components/auth/common/VerifyInput';
import { Button, Form } from '~components/common';
import { ROUTE } from '~constants';

interface Props {}

const ByPhone: FC<Props> = () => {
  const { onSubmit, onVerifySubmit, certVerifyError, isCertificationSuccess, isCertVerifySuccess, minutes, seconds } =
    useByPhone();

  return (
    <AuthTemplate title="아이디 찾기" description="휴대폰 본인인증 후 ID 찾기를 확인할 수 있습니다.">
      <Container>
        <Form<ByPhoneInputForm> id="byPhone" onSubmit={onSubmit}>
          {(props) => (
            <ByPhoneInput
              isCertificationSuccess={isCertificationSuccess}
              minutes={minutes}
              seconds={seconds}
              {...props}
            />
          )}
        </Form>
        <Form onSubmit={onVerifySubmit}>
          {(props) => (
            <VerifyInput
              isCertificationSuccess={isCertificationSuccess}
              isCertVerifySuccess={isCertVerifySuccess}
              minutes={minutes}
              seconds={seconds}
              errMsg={certVerifyError}
              {...props}
            />
          )}
        </Form>
        <Button disabled={!isCertVerifySuccess} form="byPhone" htmlType="submit" className="confirm-button">
          아이디 확인
        </Button>
      </Container>
    </AuthTemplate>
  );
};

function useByPhone() {
  const rotuer = useRouter();
  const { minutes, seconds, setMinutes, setSeconds } = useTimer(0, 0);
  const {
    mutate: certificationMutate,
    data: certificationData,
    isSuccess: isCertificationSuccess,
  } = useCertificationQuery();
  const {
    mutate: certVerifyMutate,
    error: certVerifyError,
    data: certVerifyData,
    isSuccess: isCertVerifySuccess,
  } = useCertVerifyQuery();

  const onSubmit = useCallback(
    (data: ByPhoneInputForm) => {
      if (isCertVerifySuccess && isCertificationSuccess && certVerifyData) {
        const { email, regDate: date, userId } = certVerifyData;
        rotuer.push(
          {
            pathname: ROUTE.FIND_ID.CONFIRM,
            query: { email, date, userId, name: data.name },
          },
          { query: undefined }
        );
      }
      if (data?.jumin && data.name && data?.juminSecond && data?.name && data?.mobile && data?.mobileCode) {
        certificationMutate(
          {
            jumin: data.jumin + data.juminSecond,
            name: data.name,
            mobile: data.mobile,
            mobileCode: data.mobileCode,
          },
          {
            onSuccess: () => {
              setMinutes(3);
              setSeconds(0);
            },
          }
        );
      }
    },

    [certVerifyData, certificationMutate, isCertVerifySuccess, isCertificationSuccess, rotuer, setMinutes, setSeconds]
  );
  const onVerifySubmit = useCallback(
    (data: { verify?: string }) => {
      if (isCertificationSuccess && data.verify) {
        certVerifyMutate({
          authNo: data.verify,
          changeMobile: false,
          logPid: certificationData.logPid,
          marketingAgreeYn: false,
          mobileAuthAgreeYn: false,
          searchId: true,
          searchPwd: false,
          serviceAgreeYn: false,
        });
      }
    },
    [certVerifyMutate, certificationData?.logPid, isCertificationSuccess]
  );

  return {
    onSubmit,
    onVerifySubmit,
    certVerifyError,
    isCertificationSuccess,
    isCertVerifySuccess,
    minutes,
    seconds,
  };
}

//styles
const Container = styled.div`
  .confirm-button {
    margin-top: 32px;
  }
`;

export default ByPhone;
