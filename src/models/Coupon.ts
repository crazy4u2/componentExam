import { DeliveryGroups, PaymentInfo } from './Order';

// /coupons/calculate, /coupons/maximum 의 Response 에 같이 사용.
export interface Coupons {
  orderSheetNo: string;
  products: ProductsCoupon[];
  cartCoupons: CartCoupons[];
  cartAmt: number;
  deliveryAmt: number;
  productCouponDiscountAmt: number;
  cartCouponDiscountAmt: number;
  deliveryCouponDiscountAmt: number;
  deliveryCoupons: [];
}

export interface CartCoupons {
  couponIssueNo: number;
  couponNo: number;
  discountRate: number;
  freeDeliveryYn: string;
  couponName: string;
  reason: string;
  couponType: string | 'PRODUCT'; //etc
  couponTargetType: string | 'ALL_PRODUCT'; //etc
  usablePlatformTypes: string;
  useEndYmdt: string;
  fixedAmountDiscount: boolean;
  maxDiscountAmt: number;
  freeDelivery: boolean;
  otherCouponUsable: boolean;
  cartCouponUsable: boolean;
  productCouponUsable: boolean;
  limitPayType: string | 'CREDIT_CARD'; //etc
  displayCouponName: string;
  skipsAccumulation: boolean;
  minSalePrice: string | number | null;
  selected: boolean;
  used: boolean;
  couponDiscountAmt: number;
}

export interface ProductsCoupon {
  productNo: number;
  brandName: string;
  productName: string;
  mainOption: string; //'a:1';
  optionInputs: {} | null;
  buyAmt: number;
  productCouponDiscountAmt: number;
  optionCnt: number;
  totalOrderCnt: number;
  invalidProductCoupons: [
    {
      reason: string;
      couponIssueNo: number;
      couponNo: number;
      couponName: string;
    }
  ];
  productPlusCoupons: ProductCoupons[];
  productCoupons: ProductCoupons[];
}

export interface ProductCoupons {
  couponIssueNo: number;
  couponNo: number;
  discountRate: number;
  freeDeliveryYn: string;
  couponName: string;
  reason: string;
  couponType: string | 'PRODUCT';
  couponTargetType: string | 'ALL_PRODUCT';
  usablePlatformTypes: string;
  useEndYmdt: string;
  fixedAmountDiscount: boolean;
  maxDiscountAmt: 1;
  freeDelivery: boolean;
  otherCouponUsable: boolean;
  cartCouponUsable: boolean;
  productCouponUsable: boolean;
  limitPayType: string | 'CREDIT_CARD';
  displayCouponName: string;
  skipsAccumulation: boolean;
  minSalePrice: string | null;
  selected: boolean;
  used: boolean;
  couponDiscountAmt: number;
}

// /coupons/calculate, /coupons/apply req 에 같이 사용
export interface AppliedCoupons {
  cartCouponIssueNo: number;
  promotionCode: string;
  productCoupons: [
    {
      productNo: number;
      couponIssueNo: number;
      plusCouponIssueNo: number;
    }
  ];
  deliveryCouponIssueNo?: number;
}

export interface CouponsApplyRes {
  paymentInfo: PaymentInfo;
  appliedCoupons: AppliedCoupons;
  availablePayTypes: [];
  deliveryGroups: DeliveryGroups[];
}
