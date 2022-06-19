import * as homeModel from '~models/Home';
import { AxiosInstance } from '~utils/Axios';

export const alarmPopup = async () => {
  const {
    data: { resultData },
  } = await AxiosInstance.get<homeModel.AlarmPopupPromise>('/home/boards/recently');
  return resultData;
};

export const countBasket = async () => {
  const {
    data: { resultData },
  } = await AxiosInstance.get<homeModel.CountBasketPromise>('/home/baskets/count');
  return resultData;
};

export async function banners(params: homeModel.BannerReq) {
  const {
    data: { resultData },
  } = await AxiosInstance.get<homeModel.BannersPromise>('/home/banners', { params });
  return resultData;
}

export async function hotDealLiveList(params: homeModel.UserPid) {
  const {
    data: { resultData },
  } = await AxiosInstance.get<homeModel.HotDealLivePromise>('/home/hots', { params });
  return resultData;
}

export async function previewLiveList(params: homeModel.PreviewLiveListReq) {
  const {
    data: { resultData },
  } = await AxiosInstance.get<homeModel.PreviewLiveListPromise>('/home/previews', { params });
  return resultData;
}

export const category = async () => {
  const {
    data: { resultData },
  } = await AxiosInstance.get<homeModel.CategoryPromise>('/home/category');
  return resultData;
};

export async function categoryItems(params: homeModel.CategoryItemsReq) {
  const {
    data: { resultData },
  } = await AxiosInstance.get<homeModel.LiveCategoryProductsPromise>(`/home/lives/?category=${params.category}`, {
    params,
  });
  return resultData;
}

export const shortcut = async () => {
  const {
    data: { resultData },
  } = await AxiosInstance.get<homeModel.ShortcutPromise>(`/home/shortcuts`);
  return resultData;
};

export const products = async () => {
  const {
    data: { resultData },
  } = await AxiosInstance.get<homeModel.ProductsPromise>('/home/products');
  return resultData;
};

export async function categoryProductList(params: homeModel.CategoryPropductListReq) {
  const {
    data: { resultData },
  } = await AxiosInstance.get<homeModel.CategoryProductListPromise>('/home/category/products', { params });
  return resultData;
}
