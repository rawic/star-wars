import React from 'react';
import { Header, Wrapper } from '@components';

const Layout = ({ children }) => (
  <Wrapper $wide>
    <Header />
    {children}
  </Wrapper>
);

export default Layout;
