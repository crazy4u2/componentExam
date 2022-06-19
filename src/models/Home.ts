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
 * 알림팝업 - 팝업(공지사항)
 */
export type AlarmPopupPromise = DefaultResponse<AlarmPopupRes>;

/**
 * 액션바 - 장바구니 카운팅
 */
export type CountBasketPromise = DefaultResponse<CountBasketRes>;

/**
 * 상하단배너 - 목록
 * @param {'T' | 'S'} bannerType LIVE | GOODS
 */
export type BannersPromise = DefaultResponse<BannersRes[]>;

/**
 * 핫딜라이브 - 목록
 * @param {string} userPid Required = N
 */
export type HotDealLivePromise = DefaultResponse<HotDealLiveListRes[]>;

/**
 * 라이브예고 - 목록
 * @param {string} devType Required = N, 디바이스 타입 (I, A)
 * @param {string} devToken Required = N, 디바이스 토큰
 * @param {string} userPid Required = N
 */
export type PreviewLiveListPromise = DefaultResponse<PreviewLiveListRes[]>;

/**
 * 방송 카테고리 조회
 */
export type CategoryPromise = DefaultResponse<CategoryRes[]>;

/**
 * live 카테고리별 상품 조회
 */
export type LiveCategoryProductsPromise = DefaultResponse<LiveCategoryProductsRes[]>;

/**
 * Shortcut 상품 조회
 */
export type ShortcutPromise = DefaultResponse<ShortcutRes[]>;

/**
 * 일반 상품 조회
 */
export type ProductsPromise = DefaultResponse<Product[]>;

/**
 * 카테고리 별 일반 상품 조회
 * @param {string} categoryId Required = N, 카테고리 ID
 * @param {number} pageSize Required = N, 페이지사이즈 (default = 20)
 * @param {number} pageNum Required = N, 페이지번호 (default = 1)
 */
export type CategoryProductListPromise = DefaultResponse<CategoryProductList>;
