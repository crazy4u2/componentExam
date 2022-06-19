import { AppliedCoupons } from '~models/Coupon';
import { AxiosInstance } from '~utils/Axios';

export const getCoupons = async (orderSheetNo: string) =>
  AxiosInstance.get(`/order/${orderSheetNo}/coupons`).then((res) => res.data.resultData);

export const postCouponsApply = async (orderSheetNo: string, params: AppliedCoupons) =>
  AxiosInstance.post(`/order/${orderSheetNo}/coupons/apply`, params).then((res) => res.data.resultData);

export const postCouponsCalculate = async (orderSheetNo: string, params: AppliedCoupons) =>
  AxiosInstance.post(`/order/${orderSheetNo}/coupons/calculate`, params).then((res) => res.data.resultData);

export const postCouponsMax = async (orderSheetNo: string) =>
  AxiosInstance.post(`/order/${orderSheetNo}/coupons/maximum`, { channelType: null }).then(
    (res) => res.data.resultData
  );
