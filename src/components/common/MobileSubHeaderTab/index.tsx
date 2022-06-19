import React from 'react';

interface Props {
  isNormalActive: boolean;
}

const MobileSubHeaderTab = ({ isNormalActive }: Props) => {
  return (
    <ul>
      <li className={isNormalActive ? 'active' : ''}>상품</li>
      <li className={!isNormalActive ? 'active' : ''}>숏컷</li>
    </ul>
  );
};

export default MobileSubHeaderTab;
