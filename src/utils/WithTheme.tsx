import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '~styles/theme';

export const provideTheme = (children: ReactElement) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
