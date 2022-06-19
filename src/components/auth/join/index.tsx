import _ from 'lodash';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import useTimer from 'src/hooks/useTimer';
import { useCertificationQuery, useCertVerifyQuery, useJoinQuery } from 'src/query/useAuthQuery';
import { Button, Form } from '~components/common';
import { ROUTE } from '~constants';
import AuthTemplate from '../common/AuthTemplate';
import VerifyInput from '../common/VerifyInput';
import AgreeInput, { AgreeInputForm } from './AgreeInput';
import JoinInput, { JoinInputForm } from './JoinInput';

const Join = () => {
  const {
    onSubmit,
    onVerifySubmit,
    isCertVerifySuccess,
    isCertificationSuccess,
    certVerifyError,
    minutes,
    seconds,
    onInfoCheck,
    onAgreeCheck,
    disabledSubmit,
  } = useJoin();

  return (
    <AuthTemplate title="회원가입" description="회원가입을 위한 정보 입력이 필요합니다.">
      <Form<JoinInputForm> id="joinForm" onSubmit={onSubmit}>
        {(props) => {
          return (
            <JoinInput
              isCertificationSuccess={isCertificationSuccess}
              minutes={minutes}
              seconds={seconds}
              onInfoCheck={onInfoCheck}
              {...props}
            />
          );
        }}
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
      <Form<AgreeInputForm>>
        {(props) => {
          return <AgreeInput onAgreeCheck={onAgreeCheck} {...props} />;
        }}
      </Form>
      <Button form="joinForm" htmlType="submit" disabled={!disabledSubmit}>
        가입하기
      </Button>
    </AuthTemplate>
  );
};

// hoooks
function useJoin() {
  const [infoCheck, setInfoCheck] = useState(false);
  const [agreeCheck, setAgreeCheck] = useState(false);
  const [agree, setAgree] = useState({
    marketingAgreeYn: false,
    mobileAuthAgreeYn: false,
    serviceAgreeYn: false,
  });
  const router = useRouter();
  const { minutes, seconds, setMinutes, setSeconds } = useTimer(0, 0);
  const {
    mutate: certificationMutate,
    data: certificationData,
    isSuccess: isCertificationSuccess,
  } = useCertificationQuery();
  const {
    mutate: certVerifyMutate,
    data: certverifyData,
    error: certVerifyError,
    isSuccess: isCertVerifySuccess,
  } = useCertVerifyQuery();
  const { mutate: joinMutate } = useJoinQuery();
  const disabledSubmit = infoCheck && agreeCheck && isCertVerifySuccess;

  const fetchJonin = useCallback(
    (data: JoinInputForm) => {
      const subData = {
        zip: '',
        addr: '',
        addr2: '',
        countryCode: 'KR',
        ci: '',
        di: '',
        foreignerYn: false,
        joinPath: '',
        snsKey: '',
        mobile: '',
        birthday: data.jumin || '',
        sex: '',
        name: '',
      };

      joinMutate(
        {
          ...subData,
          ...certverifyData,
          userId: data.userId || '',
          email: data.email || '',
          pwd: data.pwd || '',
          tel: certverifyData?.mobile || '',
          nickname: data.nickName || '',
          mobileAuthAgreeYn: agree.mobileAuthAgreeYn,
          serviceAgreeYn: agree.serviceAgreeYn,
          marketingAgreeYn: agree.marketingAgreeYn,
          authYn: true,
          dispYn: true,
        },
        { onSuccess: () => router.push(ROUTE.LOGIN) }
      );
    },
    [agree.marketingAgreeYn, agree.mobileAuthAgreeYn, agree.serviceAgreeYn, certverifyData, joinMutate, router]
  );
  const onSubmit = useCallback(
    (data: JoinInputForm) => {
      if (disabledSubmit) fetchJonin(data);

      if (!disabledSubmit && data.jumin && data.juminSecond) {
        certificationMutate(
          {
            jumin: data.jumin + data.juminSecond,
            name: data.name || '',
            mobile: data.mobile || '',
            mobileCode: data.mobileCode || '',
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

    [certificationMutate, disabledSubmit, fetchJonin, setMinutes, setSeconds]
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
          searchPwd: false,
          serviceAgreeYn: false,
        });
      }
    },
    [certVerifyMutate, certificationData?.logPid, isCertificationSuccess]
  );
  const onInfoCheck = useCallback((value: boolean) => {
    setInfoCheck(value);
  }, []);
  const onAgreeCheck = useCallback((agree: string[]) => {
    const check = agree && agree.includes('agree1') && agree.includes('agree2');
    setAgreeCheck(check);

    setAgree({
      mobileAuthAgreeYn: agree.includes('agree1'),
      serviceAgreeYn: agree.includes('agree2'),
      marketingAgreeYn: agree.includes('agree3'),
    });
  }, []);

  useEffect(() => {
    if (isCertVerifySuccess) {
      setMinutes(0);
      setSeconds(0);
    }
  }, [isCertVerifySuccess, setMinutes, setSeconds]);

  return {
    onSubmit,
    onVerifySubmit,
    isCertificationSuccess,
    isCertVerifySuccess,
    certVerifyError,
    minutes,
    seconds,
    onInfoCheck,
    onAgreeCheck,
    disabledSubmit,
  };
}

export default Join;
