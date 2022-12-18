import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { ContactProvider } from './contexts/ContactContext';
import { GlobalStyles } from './styles/global';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ContactProvider>
        <App />
      </ContactProvider>
    </ThemeProvider>
  </React.StrictMode>
);
