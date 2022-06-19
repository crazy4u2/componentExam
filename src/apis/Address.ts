import { AddressMemoRequest, AddressRequest, AddressResOK } from '~models/Address';
import { AxiosInstance } from '~utils/Axios';

export const getAddressRecent = async () =>
  AxiosInstance.get(`/order/shipping/addresses/recent`).then((res) => res.data.resultData);

export const getAddressList = async () =>
  AxiosInstance.get(`/order/shipping/addresses`).then((res) => res.data.resultData);

export const putAddress = async (addNo: number, addData: AddressRequest) =>
  AxiosInstance.put(`/order/shipping/addresses/${addNo}`, addData).then((res) => res.data);

export const postAddress = async (addData: AddressRequest) =>
  AxiosInstance.post(`/order/shipping/addresses`, addData).then((res) => res.data);

export const delAddress = async (addNo: number) =>
  AxiosInstance.delete(`/order/shipping/addresses/${addNo}`).then((res) => res.data.resultData);

export const putAddressDefault = async (addNo: number) =>
  AxiosInstance.put(`/order/shipping/addresses/${addNo}/default`).then((res) => res.data.resultData);

export const getAddressDetail = async (addNo: number) =>
  AxiosInstance.get(`/order/shipping/addresses/${addNo}`).then((res) => res.data.resultData);

export const postAddressMemoWithCoupons = async (params: AddressMemoRequest, orderSheetNo: string) =>
  AxiosInstance.post(`/order/${orderSheetNo}/calculate`, params).then((res) => res.data.resultData);
