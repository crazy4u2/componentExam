import { useInfiniteQuery, useQuery, useQueryClient } from 'react-query';
import * as homeModel from '~models/Home';
import * as api from '~apis/Home';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export function useBannersQuery(params: homeModel.BannerReq) {
  const query = useQuery(['banners', params], () => api.banners(params));
  return query;
}

export function useProdcutList(params: homeModel.CategoryPropductListReq) {
  const query = useQuery(['productCategorytList', params], () => api.categoryProductList(params));
  return query;
}

export function useCategoryProdcutList(params: homeModel.CategoryPropductListReq) {
  const { ref, inView } = useInView({ threshold: 0.5, rootMargin: '50px' });
  const query = useInfiniteQuery(
    'productCategorytList',
    ({ pageParam = params.pageNum }) =>
      api.categoryProductList({ pageSize: params.pageSize, pageNum: pageParam, categoryId: params.categoryId }),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (allPages.length === lastPage.totalPage) return undefined;
        return allPages.length + 1;
      },
    }
  );

  const { fetchNextPage } = query;

  useEffect(() => {
    fetchNextPage();
  }, [inView]);

  return { measureRef: ref, ...query };
}
