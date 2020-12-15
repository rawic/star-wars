import styled, { css } from 'styled-components';
import { device } from '@utilities';

const Input = styled.input`
  border-radius: 0.4rem;
  border: 1px solid #eee;
  padding: 0.7rem 1.5rem;
  transition: box-shadow,
    ${({ theme }) => theme.transition.duration.default} linear;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.4);
  }

  ${({ $fullwidth }) =>
    $fullwidth &&
    css`
      width: 100%;
    `};

  ${({ $search }) =>
    $search &&
    css`
      border-radius: 0.8rem;
      @media ${device.sm} {
        max-width: 31.5rem;
      }
      &::placeholder {
        color: #adadad;
      }
    `};
`;

export default Input;
