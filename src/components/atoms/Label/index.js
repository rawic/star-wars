import styled from 'styled-components';

const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-bottom: 0.5rem;
  &:not(:first-of-type) {
    margin-top: 1rem;
  }
`;

export default Label;
