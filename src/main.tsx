import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { ContactProvider } from './contexts/ContactContext';
import { GlobalStyles } from './styles/global';
import theme from './styles/theme';
import Modal from 'react-modal';
import { ModalProvider } from './contexts/ModalContext';

Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ContactProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </ContactProvider>
    </ThemeProvider>
  </React.StrictMode>
);
