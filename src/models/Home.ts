import { DefaultResponse } from './Common';

export interface UserPid {
  userPid?: string;
}

export interface PreviewLiveListReq {
  devType?: string;
  devToken?: string;
  userPid?: string;
}

export interface BannerReq {
  bannerType: 'T' | 'S';
}

export interface CategoryItemsReq {
  category: number;
  userPid?: string;
}

export interface CategoryPropductListReq {
  categoryId?: string;
  pageSize?: number;
  pageNum?: number;
}

export interface AlarmPopupRes {
  articleNo: number;
  title: string;
  imageUrl: string;
  viewCnt: string;
}
export interface CountBasketRes {
  count: number;
}

export interface BannersRes {
  bannerName: string;
  bannerNameColor: string;
  description?: string;
  descriptionColor?: string;
  imageUrl: string;
  displayOrder: number;
  displayStartYmdt: string;
  displayEndYmdt: string;
  linkId: string;
  type: 'LIVE' | 'GOODS';
}

export interface HotDealLiveListRes {
  pid: string;
  userPid: string;
  openDate: string;
  schStartDate: string;
  schEndDate: string;
  startDate: string;
  endDate: string;
  likeCount: number;
  favoriteCount: number;
  runStart: string;
  runTime: number;
  title: string;
  chatRoomId: string;
  wowzaAppName: string;
  wowzaStreamName?: string;
  filePath: string;
  div: string;
  imageUrl: string;
  gifImageUrl?: string;
  userCnt: number;
  type?: string;
  category?: string;
  sortNo: number;
  state: string;
  goodsId: string;
  goodsName: string;
  goodsSellFlag: string;
  reserveTf?: string;
  shortcutUrl?: string;
  sellPrice: number;
  finalPrice: number;
  discountPercent: number;
  thumurl?: string;
  placeName?: string;
}

export interface PreviewLiveListRes {
  pid: string;
  userPid: string;
  openDate: string;
  schStartDate: string;
  schEndDate: string;
  startDate?: string;
  endDate?: string;
  likeCount: number;
  favoriteCount: number;
  runStart?: string;
  runTime: number;
  title?: string;
  chatRoomId?: string;
  wowzaAppName?: string;
  wowzaStreamName?: string;
  filePath?: string;
  div: string;
  imageUrl?: string;
  gifImageUrl?: string;
  userCnt: number;
  type?: string;
  category?: string;
  sortNo: number;
  state: string;
  goodsId: string;
  goodsName?: string;
  goodsSellFlag?: string;
  reserveTf: string;
  shortcutUrl?: string;
  sellPrice: number;
  finalPrice: number;
  discountPercent: number;
  thumurl?: string;
  placeName?: string;
}

export interface CategoryRes {
  categoryId: string;
  upCategoryId: string;
  categoryName: string;
  url?: string;
  regDate?: string;
  regUser?: string;
  modDate?: string;
  modUser?: string;
  useYn?: string;
  cmsYn?: string;
  type?: string;
  etc1?: string;
  etc2?: string;
  etc3?: string;
}

export interface LiveCategoryProductsRes {
  pid: string;
  userPid: string;
  openDate: string;
  schStartDate: string;
  schEndDate: string;
  startDate: string;
  endDate: string;
  likeCount: number;
  favoriteCount: number;
  runStart: string;
  runTime: number;
  title: string;
  chatRoomId: string;
  wowzaAppName: string;
  wowzaStreamName?: string;
  filePath: string;
  div: string;
  imageUrl: string;
  gifImageUrl?: string;
  userCnt: number;
  type?: string;
  category: string;
  sortNo: number;
  state: string;
  goodsId: string;
  goodsName: string;
  goodsSellFlag: string;
  reserveTf?: string;
  shortcutUrl?: string;
  sellPrice: number;
  finalPrice: number;
  discountPercent: number;
  thumurl?: string;
  placeName?: string;
}

export interface ShortcutRes {
  pid: string;
  goodsId: string;
  name: string;
  sellFlag: string;
  display?: string;
  reserveTf?: string;
  shortcutUrl: string;
  sellPrice: number;
  finalPrice: number;
  discountPercent: number;
  thumurl: string;
  placeName: string;
}

export interface Product {
  pid: string;
  goodsId: string;
  name: string;
  sellFlag: string;
  display?: string;
  reserveTf?: string;
  shortcutUrl: string;
  sellPrice: number;
  finalPrice: number;
  discountPercent: number;
  thumurl: string;
  placeName: string;
  images: { imageNo: number; url: string }[];
}

export interface CategoryProductList {
  totalCnt: number;
  totalPage: number;
  goods: Product[];
}

/**
 * ???????????? - ??????(????????????)
 */
export type AlarmPopupPromise = DefaultResponse<AlarmPopupRes>;

/**
 * ????????? - ???????????? ?????????
 */
export type CountBasketPromise = DefaultResponse<CountBasketRes>;

/**
 * ??????????????? - ??????
 * @param {'T' | 'S'} bannerType LIVE | GOODS
 */
export type BannersPromise = DefaultResponse<BannersRes[]>;

/**
 * ??????????????? - ??????
 * @param {string} userPid Required = N
 */
export type HotDealLivePromise = DefaultResponse<HotDealLiveListRes[]>;

/**
 * ??????????????? - ??????
 * @param {string} devType Required = N, ???????????? ?????? (I, A)
 * @param {string} devToken Required = N, ???????????? ??????
 * @param {string} userPid Required = N
 */
export type PreviewLiveListPromise = DefaultResponse<PreviewLiveListRes[]>;

/**
 * ?????? ???????????? ??????
 */
export type CategoryPromise = DefaultResponse<CategoryRes[]>;

/**
 * live ??????????????? ?????? ??????
 */
export type LiveCategoryProductsPromise = DefaultResponse<LiveCategoryProductsRes[]>;

/**
 * Shortcut ?????? ??????
 */
export type ShortcutPromise = DefaultResponse<ShortcutRes[]>;

/**
 * ?????? ?????? ??????
 */
export type ProductsPromise = DefaultResponse<Product[]>;

/**
 * ???????????? ??? ?????? ?????? ??????
 * @param {string} categoryId Required = N, ???????????? ID
 * @param {number} pageSize Required = N, ?????????????????? (default = 20)
 * @param {number} pageNum Required = N, ??????????????? (default = 1)
 */
export type CategoryProductListPromise = DefaultResponse<CategoryProductList>;
