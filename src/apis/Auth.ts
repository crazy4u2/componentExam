import * as authModel from '~models/Auth';
import { AxiosAuthInstance } from '~utils/Axios';

interface USER_ID {
  userId: string;
}

interface USER_NICK {
  nickName: string;
}

interface REFRESH_TOKEN {
  refreshToken: string;
}

export async function login(params: authModel.LoginReq) {
  const {
    data: { resultData },
  } = await AxiosAuthInstance.post<authModel.LoginPromise>('/auth/login', params);
  return resultData;
}

export async function snsLogin(params: authModel.LoginSnsReq) {
  const {
    data: { resultData },
  } = await AxiosAuthInstance.post<authModel.LoginPromise>('/auth/snslgoin', params);
  return resultData;
}

export async function join(params: authModel.JoinReq) {
  const {
    data: { resultData },
  } = await AxiosAuthInstance.post<authModel.JoinPromise>('/auth/join', params);
  return resultData;
}

export async function snsjoin(params: authModel.JoinReq) {
  const {
    data: { resultData },
  } = await AxiosAuthInstance.post<authModel.JoinPromise>('/auth/snsjoin', params);
  return resultData;
}

export async function getCetification(userId: USER_ID) {
  const {
    data: { resultData },
  } = await AxiosAuthInstance.get<authModel.GetCertificationPromise>(`/auth/certification?userId=${userId}`);
  return resultData;
}

export async function postCertification(params: authModel.CertificationReq) {
  const {
    data: { resultData },
  } = await AxiosAuthInstance.post<authModel.CertificationPromise>('/auth/certification', params);
  return resultData;
}

export async function postCertVerify(params: authModel.CertVerifyReq) {
  const {
    data: { resultData },
  } = await AxiosAuthInstance.post<authModel.CertVerifyPromise>('/auth/certification/verify', params);
  return resultData;
}

export async function checkId(params: USER_ID) {
  const {
    data: { resultData },
  } = await AxiosAuthInstance.post<authModel.CheckPromise>('/auth/checkId', params);
  return resultData;
}

export async function checkNick(params: USER_NICK) {
  const {
    data: { resultData },
  } = await AxiosAuthInstance.post<authModel.CheckPromise>('/auth/checkNick', params);
  return resultData;
}

export async function findId(params: authModel.FindIdReq) {
  const {
    data: { resultData },
  } = await AxiosAuthInstance.post<authModel.FindidPromise>('/auth/find/id', params);
  return resultData;
}

export async function findPw(params: authModel.FindPwReq) {
  const {
    data: { resultData },
  } = await AxiosAuthInstance.post('/auth/find/pw', params);
  return resultData;
}

export async function tokenRefresh(params: REFRESH_TOKEN) {
  const {
    data: { resultData },
  } = await AxiosAuthInstance.post<authModel.LoginPromise>('/auth/token/refresh', params);
  return resultData;
}
