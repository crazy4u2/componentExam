import { FC, ReactElement, useState } from 'react';
import styled from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';
import CategoryItem, { CategoryItemProps } from './CategoryItem';

interface Props {
  initialTab?: number;
  children: ReactElement<CategoryItemProps>[];
  onClick?: (index: number) => void;
  defaultSelectAll?: boolean;
  className?: string;
}

const Category = ({ children, ...props }: Props) => {
  const { selectedTab, onSelectTab } = useCategory({ ...props, children });
  return (
    <Container length={children.length}>
      <ScrollContainer className="scroll-container">
        <ul>
          {children.map((item, index) => (
            <CategoryItem
              key={String(index)}
              label={item.props.label}
              selected={selectedTab === index}
              onClick={onSelectTab(index)}
            />
          ))}
        </ul>
      </ScrollContainer>
    </Container>
  );
};

// hooks
function useCategory({ ...props }: Props) {
  const { initialTab, onClick } = props;
  const [selectedTab, setSelectTab] = useState(initialTab);
  const onSelectTab = (index: number) => () => {
    setSelectTab(index);
    onClick && onClick(index);
  };
  return { selectedTab, onSelectTab };
}

// styles
const Container = styled.div<{ length: number }>`
  margin-top: 28px;
  overflow-x: auto;
  white-space: nowrap;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  ul {
    display: flex;
    li {
      margin-right: 8px;
      &:last-of-type {
        margin: 0;
      }
    }
  }
`;

Category.Item = CategoryItem;

export default Category;
