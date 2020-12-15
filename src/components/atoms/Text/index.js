import styled, { css } from 'styled-components';

const Text = styled.span`
  /* ${({ $color }) =>
    $color &&
    css`
      color: $color;
    `} */

  ${({ $dim }) =>
    $dim &&
    css`
      color: ${({ theme }) => theme.tertiary};
    `}
`;

export default Text;
