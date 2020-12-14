import { ThemeProvider } from 'styled-components';
import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const MainTemplate = ({ children }) => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </React.Fragment>
);

export default MainTemplate;
