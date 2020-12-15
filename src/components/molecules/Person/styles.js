import styled from 'styled-components';

export const Person = styled.article`
  background-color: #272635;
  margin-bottom: 2rem;
  border-radius: 1.2rem;
  padding: 1.5rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: background-color 0.2s;
  position: relative;
  &:hover {
    background-color: #21202d;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.highlight};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 2.5rem;
`;
