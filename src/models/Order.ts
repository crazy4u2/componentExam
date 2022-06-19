import { AppliedCoupons, Coupons, ProductCoupons, ProductsCoupon } from './Coupon';

interface OptionInputs {
  inputLabel: string | null;
  inputValue: string | null;
  required: string | null;
}

export interface OrderProductOptions {
  optionInputs: OptionInputs[];
  price: {
    salePrice: number;
    addPrice: number;
    immediateDiscountAmt: number;
    additionalDiscountAmt: number;
    buyAmt: number;
    standardAmt: number;
  };
  optionManagementCd: string | null;
  cartNo: number;
  imageUrl: string;
  optionName: string | null;
  optionValue: string | null;
  orderCnt: number;
  stockCnt: number;
  optionType: string;
  accumulationAmtWhenBuyConfirm: number;
  productNo: number;
  optionNo: number;
  validInfo: boolean | null;
  reservation: boolean;
  reservationDeliveryYmdt: boolean | null;
  setOptions: SetOptions[];
  soldOut: boolean;
  optionTitle: string;
}

interface SetOptions {
  mallProductNo: number;
  productManagementCd: string;
  productName: string;
  mallOptionNo: number;
  optionManagementCd: string;
  optionName: string;
  optionValue: string;
  usesOption: boolean;
  count: number;
  optionPrice: number;
  stockNo: number;
  sku: string;
  optionNameForDisplay: string;
}

export interface OrderProducts {
  brandName: string | null;
  brandNameEn: string | null;
  brandNo: number;
  buyAmt: number;
  deliverable: boolean;
  deliveryInternational: boolean;
  eanCode: string | null;
  hsCode: string | null;
  imageUrl: string;
  liked: boolean;
  optionUsed: boolean;
  orderProductOptions: OrderProductOptions[];
  productName: string;
  productNo: number;
  refundable: boolean;
  selectType: string | null;
  shippingAreaType: string; // 'PARTNER_SHIPPING_AREA' | 'etc...'
}

export interface DeliveryGroups {
  deliveryAmt: number;
  deliveryCondition: {
    aboveDeliveryAmt: number;
    baseDeliveryAmt: number;
    chargesRemoteDeliveryAmt: boolean;
    deliveryAmt: number;
    deliveryConditionType: string; // "CONDITIONAL" | "etc...";
    groupDeliveryAmtType: string; //'MAXIMUM_SELECTED' | 'etc...';
    remoteDeliveryAmt: number;
    returnDeliveryAmt: number;
  };
  deliveryPayType: string; // "PREPAID_DELIVERY" | "etc..."
  orderProducts: OrderProducts[];
  partnerName: string;
  partnerNo: number;
}

export interface AvailablePayTypes {
  payType: string;
  pgTypes: string[];
}

export interface PaymentInfo {
  accumulationAmt: number;
  accumulationAmtWhenBuyConfirm: number;
  availableAccumulation: boolean;
  availableMaxAccumulationAmt: number;
  cartAmt: number;
  cartCouponAmt: number;
  customsDuty: number;
  deliveryAmt: number;
  deliveryAmtOnDelivery: number;
  deliveryCouponAmt: number;
  minAccumulationLimit: number;
  minPriceLimit: number;
  paymentAmt: number;
  productAmt: number;
  productCouponAmt: number;
  remoteDeliveryAmt: number;
  remoteDeliveryAmtOnDelivery: number;
  salesTaxAmt: number;
  totalAdditionalDiscountAmt: number;
  totalImmediateDiscountAmt: number;
  totalStandardAmt: number;
  usedAccumulationAmt: number;
}

export interface ResultDataGetOrder {
  agreementTypes: ['TERMS_OF_USE', 'SELLER_PRIVACY_USAGE_AGREEMENT', 'OVERSEA_PRIVACY_USAGE_AGREEMENT'];
  appliedCoupons: AppliedCoupons;
  applyCashReceiptForAccount: boolean;
  availablePayTypes: AvailablePayTypes[];
  deliveryGroups: DeliveryGroups[];
  foreignPartners: [
    {
      partnerName: string;
      countryCd: string;
      privacyManagerName: string;
      privacyManagerPhoneNo: string;
    }
  ];
  invalidProducts: string | null;
  lastPayType: string | null;
  orderSheetAddress: {
    mainAddress: {
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
      countryCd: string;
    };
    recentAddresses: [
      {
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
        countryCd: string;
      }
    ];
    memberAddress: {
      zipCd: string;
      address: string;
      detailAddress: string;
      jibunAddress: string;
      jibunDetailAddress: string;
    };
    recentDeliveryMemo: [];
  };
  orderSheetPromotionSummary: {
    myAccumulationAmt: number;
    myCouponCnt: number;
    myDeliveryCouponCnt: number;
    usableCouponCnt: number;
    usableDeliveryCouponCnt: number;
  };
  ordererContact: {
    ordererContact1: string; // 전화번호 정규식도 가능?
    ordererContact2: string | null;
    ordererEmail: string | null;
    ordererName: string;
  };
  paymentInfo: PaymentInfo;
  requireCustomsIdNumber: boolean;
  sellerPrivacyUsagePartners: [
    {
      partnerName: string;
    }
  ];
  tradeBankAccountInfos: [
    {
      bank: string | null;
      bankAccount: '51404262804019';
      bankDepositorName: '주식회사 빗썸라이브';
      bankName: '기업은행';
    }
  ];
}

interface CouponsCalculateResProduct extends ProductsCoupon {
  productCoupons: ProductCoupons[];
}

export interface PayProductParams {
  productNo: number;
  optionNo: number;
  orderCnt: number;
  channelType: 'NAVER_EP';
  optionInputs: OptionInputs[] | null;
}

interface General {
  requestId: string;
  resultCode: number;
  resultMsg: string;
}

interface OrderSheet extends General {
  resultData: ResultDataGetOrder;
}

export interface ProductsCouponRes extends General {
  resultData: Coupons;
}

export interface PayRequest {
  agreementTypes: string[];
  orderSheetNo: string;
  shippingAddress: {
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
    usesShippingInfoLaterInput: boolean;
    shippingInfoLaterInputContact: null;
    requestShippingDate: null;
  };
  useDefaultAddress: boolean;
  saveAddressBook: boolean;
  orderMemo: string;
  deliveryMemo: string;
  member: true;
  orderer: {
    ordererName: string | null;
    ordererEmail: string | null;
    ordererContact1: string | null;
    ordererContact2: string | null;
  };
  updateMember: boolean;
  tempPassword: null;
  subPayAmt: 0;
  orderTitle: string;
  pgType: string[]; // 추후 pg사 추가되면 추가해야함.
  payType: string; // 추후 결제수단 바뀌면 추가해야함.
  // paymentAmt: number;
  clientReturnUrl: string;
  inAppYn: 'N'; // 'N' 고정
  paymentAmtForVerification: 0; // 0원 고정
  savesLastPayType: boolean;
  applyCashReceipt: boolean;
  cashReceipt: null; // 무통장같은 수단 들어오면 boolean 으로 추가해줘야 함.
  bankAccountToDeposit: null;
  remitter: null;
  shippingAddresses: [] | null;
  coupons: AppliedCoupons;
}

export default OrderSheet;
