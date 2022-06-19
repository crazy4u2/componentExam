import { FC, useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import styled from 'styled-components';
import { CategoryProductListRes, Product } from '~models/Home';
import ProductListItem from './ProductListItem';

interface Props {}

const ProductList: FC<Props> = () => {
  const { list } = useProductList();

  return (
    <Container>
      {list.map((item) => (
        <ProductListItem
          key={item.goodsId}
          url={item.images[0].url}
          name={item.name}
          discountPercent={item.discountPercent}
          finalPrice={item.finalPrice}
        />
      ))}
    </Container>
  );
};

// hooks
function useProductList() {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<{ pages: CategoryProductListRes[] }>('productCategorytList');
  const [list, setList] = useState<Product[]>([]);
  const productCategorytList = data?.pages.map((item) => item.goods).reduce((acc, cur) => [...acc, ...cur]);

  useEffect(() => {
    if (data) setList(data?.pages.map((item) => item.goods).reduce((acc, cur) => [...acc, ...cur]));
  }, [data]);
  return { productCategorytList, list };
}

// styles
const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 40px 40px;

  > li {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    .image-box {
      height: 240px;
      position: relative;
      border-radius: 16px;
      overflow: hidden;
    }
    .product-name {
      margin-top: 20px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .product-price {
      display: flex;
      > p:first-of-type {
        margin-right: 4px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px 20px;
    > li {
      .image-box {
        height: 163px;
      }
    }
  }
`;

export default ProductList;
