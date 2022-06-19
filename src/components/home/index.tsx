import _ from 'lodash';
import { useCategoryProdcutList, useProdcutList } from 'src/query/useHomeQuery';
import styled from 'styled-components';
import { Icon, Layout, Text } from '~components/common';
import Category from '~components/common/Category';
import MainBanner from './MainBanner';
import ProductList from './ProductList';

const Home = () => {
  const { totalCnt, error, measureRef, hasNextPage } = useHome();

  if (error)
    return (
      <Layout address="/">
        <div>에러가 발생했습니다</div>
      </Layout>
    );
  return (
    <Layout address="/">
      <Container>
        <MainBanner />
        <div className="wrapper">
          <Category initialTab={0}>
            <Category.Item label="전체" />
            <Category.Item label="패션의류" />
            <Category.Item label="화장품/미용" />
            <Category.Item label="디지털/가전" />
            <Category.Item label="가구/인테리어" />
            <Category.Item label="출산/육아" />
            <Category.Item label="스포츠/레저" />
            <Category.Item label="식품" />
            <Category.Item label="생활/건강" />
            <Category.Item label="도서" />
            <Category.Item label="기타" />
          </Category>
        </div>
        <div className="wrapper product-filter">
          <Text color="bithumbGray450">전체 {totalCnt}</Text>
          <div>
            <Text color="bithumbGray450">인기순</Text>
            <Icon name="arrowDown" />
          </div>
        </div>
        <div className="wrapper">
          <ProductList />
          {hasNextPage && <div ref={measureRef} />}
        </div>
      </Container>
    </Layout>
  );
};

// hooks
function useHome() {
  const { data, error, measureRef, hasNextPage } = useCategoryProdcutList({
    categoryId: undefined,
    pageSize: 20,
    pageNum: 1,
  });
  const totalCnt = data?.pages[0].totalCnt || 0;

  return { totalCnt, error, measureRef, hasNextPage };
}

// styles
const Container = styled.div`
  > .wrapper {
    margin: 0 auto;
    padding: 0 20px;
    min-width: 768px;
    max-width: 1120px;
    @media only screen and (max-width: 768px) {
      min-width: 360px;
    }
  }
  > .product-filter {
    margin: 26px auto 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
      display: flex;
      align-items: center;
      > p {
        margin-right: 8px;
      }
    }
  }
`;

export default Home;
