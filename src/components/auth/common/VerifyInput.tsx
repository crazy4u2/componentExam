import { FC, useCallback, useEffect, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import styled from 'styled-components';
import { Button, Icon, Input, Text } from '~components/common';
import { VALIDATION_SCHEMA } from '~constants';
import _ from 'lodash';

export type VerityInputForm = {
  verify?: string;
};

interface Props extends UseFormReturn<VerityInputForm> {
  isCertificationSuccess: boolean;
  isCertVerifySuccess: boolean;
  minutes: string | number;
  seconds: string | number;
  errMsg?: { resultCode: number; resultMsg: string } | null;
}

const VerifyInput: FC<Props> = ({ ...props }) => {
  const { minutes, seconds, isCertVerifySuccess, timerVisible, disabledSubmit, isCertificationSuccess } =
    useVerifyInput({ ...props });

  return (
    <Container>
      <div className="submit-wrapper">
        <div>
          <Input name="verify" placeholder="인증번호" rules={VALIDATION_SCHEMA.certificationNumber} {...props} />
          {!isCertVerifySuccess && timerVisible && (
            <Text className="timer" font="S16_Regular" color="bithumbGray450">
              {minutes}:{seconds}
            </Text>
          )}
          {isCertVerifySuccess && (
            <p className="timer">
              <Icon name="confirm" />
            </p>
          )}
        </div>

        <Button htmlType="submit" disabled={isCertVerifySuccess || disabledSubmit}>
          {isCertVerifySuccess ? '인증완료' : '인증 요청'}
        </Button>

        {/* {isCertificationSuccess && <Button disabled>인증 완료</Button>} */}
      </div>
    </Container>
  );
};

// hooks
function useVerifyInput({ ...props }: Props) {
  const {
    isCertificationSuccess,
    isCertVerifySuccess,
    minutes,
    seconds,
    errMsg,
    formState: { errors },
    watch,
    setError,
  } = props;
  const [timerVisible, setTimerVisible] = useState(false);
  const { verify } = watch();
  const disabledSubmit = !isCertificationSuccess || !_.isEmpty(errors) || _.isEmpty(verify);
  useEffect(() => {
    if (isCertificationSuccess) {
      setTimerVisible(true);
    }
  }, [isCertificationSuccess]);

  useEffect(() => {
    if (errMsg?.resultCode === 1030) setError('verify', { message: errMsg?.resultMsg });
  }, [errMsg, setError]);
  return { minutes, seconds, errMsg, isCertVerifySuccess, timerVisible, disabledSubmit, isCertificationSuccess };
}

// styles
const Container = styled.div`
  .submit-wrapper {
    display: flex;
    > div {
      position: relative;
      flex: 1;
      .timer {
        position: absolute;
        top: 18px;
        right: 12px;
      }
    }
    > button {
      width: 100px;
      margin-left: 8px;
    }
  }
`;

export default VerifyInput;
