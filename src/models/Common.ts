export interface DefaultResponse<T> {
  resultCode: number;
  resultMsg: string;
  requestId: string;
  resultData: T;
}
