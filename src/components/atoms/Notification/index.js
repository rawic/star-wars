import styled, { css } from 'styled-components';

const Notification = styled.div`
  border-radius: 4px;
  padding: 10px 15px;
  font-size: ${({ theme }) => theme.fontSize.s};

  ${({ $error }) =>
    $error &&
    css`
      background-color: ${({ theme }) => theme.errorBg};
      color: #fff;
      margin-bottom: 1rem;
    `}
`;

export default Notification;
