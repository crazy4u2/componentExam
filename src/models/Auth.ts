import { DefaultResponse } from './Common';

export interface Certification {
  authYn: string;
  birthday: string;
  ci: string;
  di: string;
  email: string;
  foreignerYn: false;
  mobile: string;
  name: string;
  regDate: string;
  sex: string;
  userId: string;
}

export type GetCertificationPromise = DefaultResponse<Certification>;
export interface CertificationReq {
  jumin: string;
  mobile: string;
  mobileCode: string;
  name: string;
}

export interface CertificationRes {
  authNo: string;
  logPid: number;
}

export type CertificationPromise = DefaultResponse<CertVerifyReq>;

export interface CertVerifyRes extends CertificationRes {
  authYn: string;
  birthday: string;
  ci: string;
  di: string;
  email: string;
  foreignerYn: false;
  mobile: string;
  name: string;
  regDate: string;
  sex: string;
  userId: string;
}

export interface CertVerifyReq {
  authNo: string;
  changeMobile: boolean;
  logPid: number;
  marketingAgreeYn: boolean;
  mobileAuthAgreeYn: boolean;
  searchId: boolean;
  searchPwd: boolean;
  serviceAgreeYn: boolean;
}

export type CertVerifyPromise = DefaultResponse<CertVerifyRes>;

export interface Exists {
  exists: boolean;
}

export interface JoinReq {
  addr: string;
  addr2: string;
  authYn: string | boolean;
  birthday: string;
  ci: string;
  countryCode: string;
  di: string;
  dispYn: boolean;
  email: string;
  foreignerYn: boolean;
  joinPath: string;
  marketingAgreeYn: boolean;
  mobile: string;
  mobileAuthAgreeYn: boolean;
  name: string;
  nickname: string;
  pwd: string;
  serviceAgreeYn: boolean;
  sex: string;
  snsKey: string;
  tel: string;
  userId: string;
  zip: string;
}

export interface JoinRes {
  userPid: number;
}

export type JoinPromise = DefaultResponse<JoinRes>;

export interface LoginReq {
  pwd: string;
  userId: string;
}

export interface LoginRes {
  accessToken: string;
  refreshToken: string;
}

export type LoginPromise = DefaultResponse<LoginRes>;

export interface LoginSnsReq {
  email: string;
  joinPath: string;
  snsKey: string;
}

export interface FindIdReq {
  email: string;
  name: string;
}

export interface FindIdRes {
  userId: string;
  regDate: string;
}

export type FindidPromise = DefaultResponse<FindIdRes>;

export interface FindPwReq extends FindIdReq {
  userId: string;
}

export type CheckPromise = DefaultResponse<{ exists: boolean }>;
