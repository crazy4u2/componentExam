import React, { FC, PropsWithChildren } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import Login from './index';
import { ThemeProvider } from 'styled-components';
import { theme } from '~styles/theme';
import { useLoginQuery } from 'src/query/useAuthQuery';

const queryClient = new QueryClient();
const Wrapper: FC<PropsWithChildren<{}>> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <ThemeProvider theme={theme}>{children} </ThemeProvider>
    </RecoilRoot>
  </QueryClientProvider>
);

describe('Login page', () => {
  it('아이디, 패스워드 인풋 입력 버튼', async () => {
    await act(async () => {
      render(
        <Wrapper>
          <Login />
        </Wrapper>
      );
    });

    const button = screen.getByRole('submit');
    const userId = screen.getByLabelText('userId');
    const password = screen.getByLabelText('pwd');

    fireEvent.change(userId, { target: { value: 'tech01' } });
    fireEvent.change(password, { target: { value: 'cip1977' } });

    expect(button).toBeEnabled();
  });

  it('form submit', async () => {
    await act(async () => {
      render(
        <Wrapper>
          <Login />
        </Wrapper>
      );
    });

    const button = screen.getByRole('submit');
    const userId = screen.getByLabelText('userId');
    const password = screen.getByLabelText('pwd');

    fireEvent.change(userId, { target: { value: 'tech01' } });
    fireEvent.change(password, { target: { value: 'cip1977' } });

    // const { result, waitFor } = renderHook(() => useLoginQuery(), { wrapper: Wrapper });

    // await waitFor(() => result.current.isSuccess);
    // expect(result.current.data).toEqual({ answer: 42 });

    fireEvent.submit(button);
  });
});
