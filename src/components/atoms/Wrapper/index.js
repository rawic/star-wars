import styled, { css } from 'styled-components';
import { device } from '@utilities';

const StyledWrapper = styled.div`
  background-color: #1a1825;
  margin-left: auto;
  margin-right: auto;
  max-width: 35rem;
  padding: 3rem 1.5rem 1.5rem;
  border-radius: 20px;
  width: 100%;
  ${({ $wide }) =>
    $wide &&
    css`
      max-width: 120rem;
    `}

  @media ${device.xs} {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media ${device.xs} {
    padding: 3rem 3.5rem 4.5rem;
  }
`;

export default StyledWrapper;
