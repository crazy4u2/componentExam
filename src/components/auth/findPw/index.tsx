import { useRouter } from 'next/router';
import { FC, useCallback } from 'react';
import { useCertificationQuery, useCertVerifyQuery, useFindPwQuery } from 'src/query/useAuthQuery';
import styled from 'styled-components';
import { Button, Form } from '~components/common';
import { ROUTE } from '~constants';
import useTimer from '~hooks/useTimer';
import AuthTemplate from '../common/AuthTemplate';
import ByPhoneInput, { ByPhoneInputForm } from '../common/ByPhoneInput';
import VerifyInput from '../common/VerifyInput';

const FindPw: FC = () => {
  const {
    onSubmit,
    onVerifySubmit,
    certVerifyError,
    isCertificationSuccess,
    isCertVerifySuccess,
    minutes,
    seconds,
    fetchFindPw,
  } = useFindPw();

  return (
    <AuthTemplate title="비밀번호 찾기" description="휴대폰 본인인증 임시 비밀번호를 확인할 수 있습니다.">
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
        <Button disabled={!isCertVerifySuccess} onClick={fetchFindPw} className="confirm-button">
          임시 비밀번호 발급
        </Button>
      </Container>
    </AuthTemplate>
  );
};

// hooks
function useFindPw() {
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
  const { mutate: findPwMutate } = useFindPwQuery();
  const onSubmit = useCallback(
    (data: ByPhoneInputForm) => {
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

    [certificationMutate, setMinutes, setSeconds]
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
          searchId: false,
          searchPwd: true,
          serviceAgreeYn: false,
        });
      }
    },
    [certVerifyMutate, certificationData?.logPid, isCertificationSuccess]
  );
  const fetchFindPw = useCallback(() => {
    if (isCertVerifySuccess && certVerifyData) {
      const { email, name, userId } = certVerifyData;
      findPwMutate({ email, name, userId }, { onSuccess: () => rotuer.push(ROUTE.LOGIN) });
    }
  }, [certVerifyData, findPwMutate, isCertVerifySuccess, rotuer]);

  return {
    onSubmit,
    onVerifySubmit,
    certVerifyError,
    isCertificationSuccess,
    isCertVerifySuccess,
    minutes,
    seconds,
    fetchFindPw,
  };
}

// styles
const Container = styled.div`
  .confirm-button {
    margin-top: 32px;
  }
`;

export default FindPw;
