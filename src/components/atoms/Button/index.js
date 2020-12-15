import styled, { css } from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  cursor: pointer;

  ${({ $highlight }) =>
    $highlight &&
    css`
      background-color: ${({ theme }) => theme.highlight};
      text-transform: uppercase;
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      font-size: ${({ theme }) => theme.fontSize.sm};
      color: #fff;
      text-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
      border-radius: 0.8rem;
      border: 0;
      transition: box-shadow ${({ theme }) => theme.transition.duration.default}
        linear;

      &:hover {
        box-shadow: 0 0 10px 1px ${({ theme }) => theme.highlight}66;
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #272635;
      color: #9593b2;
      pointer-events: none;
      &:hover {
        box-shadow: none;
      }
    `}

  ${({ $submit }) =>
    $submit &&
    css`
      font-weight: ${({ theme }) => theme.fontWeight.semibold};
      font-size: ${({ theme }) => theme.fontSize.s};
    `}

  ${({ $login }) =>
    $login &&
    css`
      width: 100%;
      margin-top: 1.5rem;
    `}
`;

export default Button;
