import styled, { css } from 'styled-components';
import { device } from '@utilities';

export const StyledLinkWrapper = styled.a`
  color: ${({ theme }) => theme.highlight};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  padding: 0.6rem 1.7rem;
  border-radius: 0.8rem;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.4);

  @media ${device.xs} {
    padding-left: 3.1rem;
    padding-right: 3.1rem;
  }

  ${({ $active }) =>
    $active &&
    css`
      background-color: ${({ theme }) => theme.highlight};
      color: #fff;
    `}
`;
