import { FC } from 'react';
import styled from 'styled-components';
import Text from '../Text';

interface Props {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

export type CategoryItemProps = Props;

const CategoryItem: FC<Props> = ({ label, onClick, selected }) => {
  return (
    <Item selected={selected}>
      <button onClick={onClick}>
        <Text font={selected ? 'S14_Bold' : 'S14_Regular'} color={selected ? 'bithumbGray800' : 'bithumbGray600'}>
          {label}
        </Text>
      </button>
    </Item>
  );
};

const Item = styled.li<{ selected?: boolean }>`
  > button {
    padding: 7.5px 16px;
    text-align: center;
    border: 1px solid ${({ theme, selected }) => (selected ? theme.colors.bithumbWhite : theme.colors.bithumbGray700)};
    background: ${({ theme, selected }) => (selected ? theme.colors.bithumbWhite : 'transparent')};
    border-radius: 18px;
  }
`;

export default CategoryItem;
