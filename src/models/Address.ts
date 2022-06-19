import { AppliedCoupons } from './Coupon';
import { PayProductParams } from './Order';

interface General {
  requestId: string;
  resultCode: number;
  resultMsg: string;
}

export interface ADDRESS {
  addressName: string;
  addressType: 'BOOK' | 'RECENT';
  defaultYn: 'Y' | 'N';
  receiverName: string;
  receiverZipCd: string;
  receiverAddress: string;
  receiverJibunAddress: string;
  receiverDetailAddress: string;
  receiverContact1: string;
  receiverContact2: string;
  customsIdNumber: string; //개인통관고유번호
  countryCd: 'KR';
}

export interface ShippingAddress {
  addressNo: number;
  addressName: string;
  useDefaultAddress: boolean; // false 고정
  usesShippingInfoLaterInput: boolean; // false 고정
  shippingInfoLaterInputContact: string | null; // null 고정
  requestShippingDate: string | null; // null 고정
  payProductParams: PayProductParams[];
  shippingAddress: {
    receiverName: string;
    countryCd: 'KR';
    receiverZipCd: string;
    receiverAddress: string;
    receiverDetailAddress: string;
    receiverJibunAddress: string;
    receiverContact1: string;
    receiverContact2: string;
    deliveryMemo: string | null;
    customsIdNumber: string | null;
    defaultYn: 'Y' | 'N';
  };
}

export interface AddressForm {
  addressNo: number;
  receiverZipCd: string;
  receiverAddress: string;
  receiverJibunAddress: string;
  receiverDetailAddress: string;
  receiverName: string;
  addressName: string;
  receiverContact1: string;
  receiverContact2: string;
  customsIdNumber: string;
  countryCd: 'KR';
  usesShippingInfoLaterInput?: boolean;
  shippingInfoLaterInputContact?: null;
  requestShippingDate?: null;
}

export interface AddressMemoRequest {
  accumulationUseAmt: number;
  addressRequest: AddressRequest;
  couponRequest: AppliedCoupons;
  shippingAddresses: ShippingAddress[];
}

export interface AddressResponse extends ADDRESS {
  addressNo: number;
  memberNo: number;
  mallNo: number;
  registerYmdt: string;
  lastUseYmdt: string;
  externalMemberNo: string | null;
  state: string;
  firstName: string;
  lastName: string;
  city: string;
}

export interface AddressGet {
  defaultAddress: AddressResponse;
  bookedAddresses: AddressResponse[];
  recentAddresses: AddressResponse[];
}

export interface AddressRequest extends ADDRESS {}

export interface AddressRecent extends General {
  resultData: AddressResponse[];
}

export interface AddressList extends General {
  resultData: AddressGet;
}

export interface AddressResOK extends General {
  resultData: string;
}

export interface FromKakao {
  receiverZipCd: string;
  receiverAddress: string;
  autoJibunAddress: string;
}

export default AddressRecent;
