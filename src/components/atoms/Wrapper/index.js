import styled, { css } from 'styled-components';

const StyledWrapper = styled.div`
  background-color: #1a1825;
  margin-left: auto;
  margin-right: auto;
  max-width: 35rem;
  padding: 3rem 3.5rem 4.5rem;
  border-radius: 20px;
  width: 100%;
  ${({ $wide }) =>
    $wide &&
    css`
      max-width: 120rem;
    `}
`;

export default StyledWrapper;
