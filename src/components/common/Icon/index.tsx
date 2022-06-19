import dynamic from 'next/dynamic';
import { FC, SVGAttributes, useMemo } from 'react';
import { useTheme } from 'styled-components';
import { theme } from '~styles/theme';

import { IconTypes } from './iconMap';

interface Props {
  name: IconTypes;
  color?: keyof typeof theme.colors;
  className?: string;
}

const Icon: FC<Props> = ({ name, color, className }) => {
  const theme = useTheme();
  const Svg = useMemo(
    () =>
      dynamic<SVGAttributes<SVGElement>>(() => import(`../../../assets/icons/${name}.svg`), {
        ssr: false,
      }),
    [name]
  );

  return <Svg className={className} {...(color && { style: { color: theme.colors[color] } })} />;
};

export default Icon;
