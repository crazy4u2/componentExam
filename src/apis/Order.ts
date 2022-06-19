import { AppliedCoupons } from '~models/Coupon';
import { PayRequest } from '~models/Order';
import { AxiosInstance } from '~utils/Axios';

export const getOrderListBySheetNo = async (orderSheetNo: string) =>
  AxiosInstance.get(`/order/${orderSheetNo}`).then((res) => res.data.resultData);

export const getCoupons = async (orderSheetNo: string) =>
  AxiosInstance.get(`/order/${orderSheetNo}/coupons`).then((res) => res.data.resultData);

export const postCouponsApply = async (params: AppliedCoupons, orderSheetNo: string) =>
  AxiosInstance.post(`/order/${orderSheetNo}/coupons/apply`, params).then((res) => res.data.resultData);

export const postPayment = async (params: PayRequest) =>
  AxiosInstance.post('/order/payments/reserve', params).then((res) => res.data.resultData);
