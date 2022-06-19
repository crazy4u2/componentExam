import { FC, useCallback, useEffect, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import styled from 'styled-components';
import { Input, Text } from '~components/common';
import _ from 'lodash';
import { VALIDATION_SCHEMA } from '~constants';
import ByPhoneInput, { ByPhoneInputForm } from '../common/ByPhoneInput';
import { useCheckIdQuery, useCheckNickQuery } from 'src/query/useAuthQuery';
import CheckSubmitInput from './CheckSubmitInput';
import { LENGTH_REG_EXP, NUMBER_REG_EXP, SPECIAL_REG_EXP, STRING_REG_EXP } from 'src/constants/validationConstans';
import CheckValiText from './CheckValiText';

export type JoinInputForm = {
  userId?: string;
  email?: string;
  pwd?: string;
  pwdRe?: string;
  nickName?: string;
} & ByPhoneInputForm;

interface Props extends UseFormReturn<JoinInputForm> {
  minutes: string | number;
  seconds: string | number;
  isCertificationSuccess: boolean;
  onInfoCheck: (value: boolean) => void;
}

const JoinInput: FC<Props> = ({ ...props }) => {
  const {
    checkIdExists,
    checkNickExists,
    checkIdOverlap,
    checkNickOverlap,
    onClickCheckId,
    onClickCheckNick,
    pwdVail,
  } = useJoinInput({ ...props });

  return (
    <Container>
      <CheckSubmitInput
        checkTrue={checkIdExists}
        checkFalse={checkIdOverlap}
        onClick={onClickCheckId}
        name="userId"
        label="아이디"
        {...props}
      />

      <Input name="email" placeholder="이메일 입력" rules={VALIDATION_SCHEMA.email} label="이메일" {...props} />
      <div className="password-input">
        <Input
          name="pwd"
          type="password"
          placeholder="비밀번호 입력"
          rules={VALIDATION_SCHEMA.password}
          label="비밀번호"
          {...props}
        />
        <div className="password-input-check">
          <CheckValiText check={pwdVail.string}>영문</CheckValiText>
          <CheckValiText check={pwdVail.number}>슷지</CheckValiText>
          <CheckValiText check={pwdVail.special}>특수문자</CheckValiText>
          <CheckValiText check={pwdVail.length}>8~12자</CheckValiText>
        </div>
      </div>
      <div className="password-input">
        <Input name="pwdRe" type="password" placeholder="비밀번호 입력" {...props} />
        <div className="password-input-check">
          <CheckValiText check={pwdVail.re}>비밀번호 확인</CheckValiText>
        </div>
      </div>
      <CheckSubmitInput
        checkTrue={checkNickExists}
        checkFalse={checkNickOverlap}
        onClick={onClickCheckNick}
        name="nickName"
        label="닉네임"
        {...props}
      />
      <ByPhoneInput {...props} />
    </Container>
  );
};

// hoook
function useJoinInput({ ...props }: Props) {
  const {
    watch,
    formState: { errors },
    onInfoCheck,
  } = props;
  const [pwdVail, setPwdVail] = useState({ number: false, string: false, special: false, length: false, re: false });
  const { userId, nickName, pwd, pwdRe } = watch();
  const { mutate: checkIdMutate, data: checkIdData, isSuccess: isCheckIdSuccess } = useCheckIdQuery();
  const { mutate: checkNickMutate, data: checkNcikData, isSuccess: isCheckNickSuccess } = useCheckNickQuery();
  const checkIdExists = !checkIdData?.exists && isCheckIdSuccess;
  const checkNickExists = !checkNcikData?.exists && isCheckNickSuccess;
  const checkIdOverlap = checkIdData?.exists && isCheckIdSuccess;
  const checkNickOverlap = checkNcikData?.exists && isCheckNickSuccess;

  const onClickCheckId = useCallback(() => {
    if (userId) checkIdMutate({ userId });
    else alert('아이디를 입력해주세요');
  }, [checkIdMutate, userId]);
  const onClickCheckNick = useCallback(() => {
    if (nickName) checkNickMutate({ nickName });
    else alert('닉네임을 입력해주세요');
  }, [checkNickMutate, nickName]);

  useEffect(() => {
    if (pwd) {
      setPwdVail((prev) => ({
        number: NUMBER_REG_EXP.test(pwd),
        string: STRING_REG_EXP.test(pwd),
        special: SPECIAL_REG_EXP.test(pwd),
        length: pwd.length >= 7 && pwd.length <= 12,
        re: prev.re,
      }));
    }
  }, [pwd]);

  useEffect(() => {
    if (pwdRe && pwd) {
      setPwdVail((prev) => ({
        ...prev,
        re: pwd === pwdRe ? true : false,
      }));
    }
  }, [pwd, pwdRe]);

  useEffect(() => {
    const check =
      Object.values(watch()).filter((x) => _.isEmpty(x)).length === 0 &&
      pwdVail.re &&
      _.isEmpty(errors) &&
      checkIdExists &&
      checkNickExists;

    if (check) onInfoCheck(true);
    else onInfoCheck(false);
  }, [checkIdExists, checkNickExists, errors, pwdVail.re, watch]);

  return {
    checkIdExists,
    checkNickExists,
    checkIdOverlap,
    checkNickOverlap,
    onClickCheckId,
    onClickCheckNick,
    pwdVail,
  };
}

// styles
const Container = styled.div`
  > div {
    margin-bottom: 16px;
  }
  .password-input {
    margin-bottom: 16px;
    .errorMsg {
      display: none;
    }
    .password-input-check {
      margin-top: 8px;
      display: flex;
      > div {
        margin-left: 10px;
      }
    }
  }
`;

export default JoinInput;
