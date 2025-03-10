import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { App } from './App';
import { GlobalStyle } from './app/GlobalStyle';
import { theme } from './app/theme';

console.log("TEST")

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
 
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
