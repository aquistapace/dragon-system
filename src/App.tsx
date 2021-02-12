import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme/defaultTheme';
import AppProvider from './utils';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AppProvider>
      <Router>
        <Routes />
      </Router>
    </AppProvider>
  </ThemeProvider>
);

export default App;
