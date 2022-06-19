import { useRouter } from 'next/router';
import { useMutation, UseMutationResult } from 'react-query';
import * as api from '~apis/Auth';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '~constants';
import { CertVerifyReq, CertVerifyRes, JoinReq, JoinRes } from '~models/Auth';
import { setCookie } from '~utils/Cookie';

export function useLoginQuery() {
  const route = useRouter();

  const mutaion = useMutation(api.login, {
    onError: (err) => console.log(err),
    onSuccess: (data) => {
      const { accessToken, refreshToken } = data;
      // localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(REFRESH_TOKEN, refreshToken);
      setCookie(ACCESS_TOKEN, accessToken, {
        path: '/',
        secure: true,
      });
      route.push('/');
    },
  });
  return mutaion;
}

export function useCertificationQuery() {
  const mutation = useMutation(api.postCertification);
  return mutation;
}

export function useCertVerifyQuery() {
  const mutation: UseMutationResult<CertVerifyRes, { resultCode: number; resultMsg: string }, CertVerifyReq> =
    useMutation(api.postCertVerify);
  return mutation;
}

export function useFindIdQyery() {
  const mutation = useMutation(api.findId);
  return mutation;
}

export function useCheckIdQuery() {
  const mutation = useMutation(api.checkId);
  return mutation;
}

export function useCheckNickQuery() {
  const mutation = useMutation(api.checkNick);
  return mutation;
}

export function useJoinQuery() {
  const mutation: UseMutationResult<JoinRes, { resultCode: number; resultMsg: string }, JoinReq> = useMutation(
    api.join
  );
  return mutation;
}

export function useFindPwQuery() {
  const mutation = useMutation(api.findPw);
  return mutation;
}
