import Image from 'next/image';
import { FC } from 'react';
import { Text } from '~components/common';

interface Props {
  url?: string;
  name: string;
  discountPercent: number;
  finalPrice: number;
}

const ProductListItem: FC<Props> = ({ url, name, discountPercent, finalPrice }) => {
  return (
    <li>
      <div className="image-box">
        {url && <Image src={'https:' + url} layout="fill" objectFit="cover" alt={name} />}
      </div>
      <Text font="S16_Regular" className="product-name">
        {name}
      </Text>
      <div className="product-price">
        <Text color="yellow400" font="S18_Regular">
          {discountPercent}%
        </Text>
        <Text font="S18_Bold">
          {finalPrice.toLocaleString()}
          <Text font="S18_Regular" as="span">
            원
          </Text>
        </Text>
      </div>
    </li>
  );
};

export default ProductListItem;
