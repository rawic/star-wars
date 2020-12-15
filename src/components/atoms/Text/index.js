import styled, { css } from 'styled-components';

const Text = styled.span`
  ${({ theme, $error }) =>
    $error &&
    css`
      color: ${({ theme }) => theme.errorBg};
      font-size: ${({ theme }) => theme.fontSize.s};
      margin-top: 0.5rem;
      display: block;
    `}

  ${({ $dim }) =>
    $dim &&
    css`
      color: ${({ theme }) => theme.tertiary};
    `}
`;

export default Text;
